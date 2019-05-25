import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../model/user-class';
import { TreeviewItem } from 'ngx-treeview';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUserList(obj) {
    return this.apiService.apiCaller('post', '/GetAllUsers', obj);
  }
  getUserNameIdList() {
    return this.apiService.apiCaller('get', '/GetAllUsersNameId');
  }
  addUser(user: User) {
    return this.apiService.apiCaller('post', '/addUser', user);
  }
  getUserById(id) {
    return this.apiService.apiCaller('get', '/userData/' + id);
  }
  updateUser(user: User) {
    return this.apiService.apiCaller('post', '/updateUser', user);
  }
  deleteUser(id) {
    return this.apiService.apiCaller('get', '/deleteUser/' + id);
  }
  getUsersRoleList() {
    return this.apiService.apiCaller('get', '/GetAllUserRoles');
  }
  getUserPermissionJson(): TreeviewItem[] {
    const qualityCategory = new TreeviewItem({
      text: 'Quality', value: 'have_quality', collapsed: true, children: [
        { text: 'View Quality', value: 'can_view_quality', checked: false },
        { text: 'Add Quality', value: 'can_add_quality', checked: false },
        { text: 'Edit Quality', value: 'can_edit_quality', checked: false },
        { text: 'Delete Quality', value: 'can_delete_quality', checked: false }
      ]
    });
    const userCategory = new TreeviewItem({
      text: 'User', value: 'have_user', collapsed: true, children: [
        { text: 'View User', value: 'can_view_user', checked: false },
        { text: 'Add User', value: 'can_add_user', checked: false },
        { text: 'Edit User', value: 'can_edit_user', checked: false },
        { text: 'Delete User', value: 'can_delete_user', checked: false }
      ]
    });
    const partyCategory = new TreeviewItem({
      text: 'Party', value: 'have_party', collapsed: true, children: [
        { text: 'View Party', value: 'can_view_party', checked: false },
        { text: 'Add Party', value: 'can_add_party', checked: false },
        { text: 'Edit Party', value: 'can_edit_party', checked: false },
        { text: 'Delete Party', value: 'can_delete_party', checked: false }
      ]
    });
    const stockCategory = new TreeviewItem({
      text: 'Bill In', value: 'have_stock', collapsed: true, children: [
        { text: 'View Bill In', value: 'can_view_stock', checked: false },
        { text: 'Add Bill In', value: 'can_add_stock', checked: false },
        { text: 'Edit Bill In', value: 'can_edit_stock', checked: false },
        { text: 'Delete Bill In', value: 'can_delete_stock', checked: false }
      ]
    });
    // const supplierCategory = new TreeviewItem({
    //   text: 'User', value: 'have_user', children: [
    //     {
    //       text: 'Supplier 1', value: 'haveSupplier1', children: [
    //         {text: 'View', value: 'canViewSupplier1'},
    //         {text: 'Add', value: 'canAddSupplier1'},
    //         {text: 'Edit', value: 'editSupplier1'}
    //       ]
    //     },
    //     {
    //       text: 'Supplier 2', value: 'haveSupplier2', children: [
    //         {text: 'View', value: 'viewSupplier2'},
    //         { text: 'Add', value: 'addSupplier2' },
    //         { text: 'Edit', value: 'editSupplier2' }
    //       ]
    //     }
    //   ]
    // });
    return [qualityCategory, userCategory, partyCategory, stockCategory];
  }

}
