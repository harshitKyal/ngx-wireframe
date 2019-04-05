import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { OrdersProfitChartData } from '../../@core/data/orders-profit-chart';
import { SolarData } from '../../@core/data/solar';
import { LayoutService } from '../../@core/utils';
import { takeWhile } from 'rxjs/operators';
import { DashboardSampleService } from '../../@core/mock/dashboard-sample.service';
import { CardReqObj, CardResponseObj } from '../../@theme/model/acquisition-card';
import { BarChartData, BarChartReq } from '../../@theme/model/acquisition-chart';
import { AcquisitionService } from '../../@theme/services/acquisition.service';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit, OnDestroy, OnChanges {

  private alive = true;
  geographyBarData: BarChartData;
  channelBarData: BarChartData;
  sourceBarData: BarChartData;
  campaignBarData: BarChartData;

  eTheme: any;
  echartGeographyInstance: any;
  echartChannelInstance: any;
  echartSourceInstance: any;
  echartCampaignInstance: any;

  optionsGeography: any = {};
  optionsChannel: any = {};
  optionsSources: any = {};
  optionsCampaign: any = {};
  barChartReqObj: BarChartReq;

  titleGeography = 'Top 5 Geographies- City';
  titleChannel = 'Top 5 channels';
  titleSouce = 'Top 5 sources- source/med combo';
  titleCampaign = 'Top 5 Campaigns';
  cardReqObj = new CardReqObj();
  newUsers = new CardResponseObj();
  newLeads = new CardResponseObj();
  newCustomer = new CardResponseObj();
  leadGenerationRate = new CardResponseObj();
  customerGenerationRate = new CardResponseObj();
  statusCards: any[] = [];
  period: string = 'week';

  commonStatusCardsSet: CardResponseObj[] = [this.newUsers,
  this.newLeads,
  this.newCustomer,
  this.leadGenerationRate,
  this.customerGenerationRate];

  // statusCardsByThemes: {
  //   default: CardResponseObj[];
  // } = {
  //     default: this.commonStatusCardsSet,
  //   };

  constructor(private themeService: NbThemeService, private acquisitionServcie: AcquisitionService,
    private layoutService: LayoutService) {
    this.barChartReqObj = new BarChartReq();
    this.barChartReqObj.channel_type = 'overview';
    this.cardReqObj = new CardReqObj();
    this.cardReqObj.channel_type = 'overview';
    // this.getGraphData();
    this.getGeographyBarData();
    this.getChannelBarData();
    this.getCampaignBarData();
    this.getSourceBarData();
    this.getUsersCount();
    this.getLeadsCount();
    this.getCustomersCount();
    this.getLeadsRate();
    this.getCustomersRate();

    // this.themeService.getJsTheme()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(theme => {
    //     this.statusCards = this.statusCardsByThemes[theme.name];
    //   });

    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  getGeographyBarData() {
    this.barChartReqObj.metric = 'new_users';
    this.barChartReqObj.dimension = 'city';
    this.acquisitionServcie.getBarChartData(this.barChartReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.geographyBarData = data.data;
        this.optionsGeography = this.setOptions(this.eTheme, this.geographyBarData);
      });
  }

  getChannelBarData() {
    this.barChartReqObj.metric = 'new_users';
    this.barChartReqObj.dimension = 'channel';
    this.acquisitionServcie.getBarChartData(this.barChartReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.channelBarData = data.data;
        this.optionsChannel = this.setOptions(this.eTheme, this.channelBarData);
      });
  }

  getSourceBarData() {
    this.barChartReqObj.metric = 'new_users';
    this.barChartReqObj.dimension = 'source';
    this.acquisitionServcie.getBarChartData(this.barChartReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.sourceBarData = data.data;
        this.optionsSources = this.setOptions(this.eTheme, this.sourceBarData);
      });
  }

  getCampaignBarData() {
    this.barChartReqObj.metric = 'new_users';
    this.barChartReqObj.dimension = 'campaign';
    this.acquisitionServcie.getBarChartData(this.barChartReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.campaignBarData = data.data;
        this.optionsCampaign = this.setOptions(this.eTheme, this.campaignBarData);
      });
  }
  // getGraphData() {
  //   this.dashboardService.getJSON()
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(data => {
  //       this.barChartData = data;
  //       this.setOptions(this.eTheme);

  //     });
  // }
  getUsersCount() {
    this.cardReqObj.segment = 'new_profiles';
    this.acquisitionServcie.getUsersCount(this.cardReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.newUsers = data.data;
        this.newUsers.title = 'New Users';
        this.statusCards.push(this.newUsers);
      });
  }
  getLeadsCount() {
    this.cardReqObj.segment = 'new_leads';
    this.acquisitionServcie.getLeadsCount(this.cardReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.newLeads = data.data;
        this.newLeads.title = 'New Leads';
        this.statusCards.push(this.newLeads);
      });
  }
  getCustomersCount() {
    this.cardReqObj.segment = 'new_customers';
    this.acquisitionServcie.getCustomersCount(this.cardReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.newCustomer = data.data;
        this.newCustomer.title = 'New Customers';
        this.statusCards.push(this.newCustomer);
      });
  }
  getCustomersRate() {
    this.cardReqObj.segment = 'leads_not_customers';
    this.acquisitionServcie.getCustomersRate(this.cardReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.customerGenerationRate = data.data;
        if (!this.customerGenerationRate.count) {
          this.customerGenerationRate.count = 0;
        }
        this.customerGenerationRate.title = 'Customer Generation Rate';
        this.statusCards.push(this.customerGenerationRate);
      });
  }
  getLeadsRate() {
    this.cardReqObj.segment = 'leads_not_customers';
    this.acquisitionServcie.getLeadsRate(this.cardReqObj)
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.leadGenerationRate = data.data;
        if (!this.leadGenerationRate.count) {
          this.leadGenerationRate.count = 0;
        }
        this.leadGenerationRate.title = 'Lead Generation Rate';
        this.statusCards.push(this.leadGenerationRate);
      });
  }

  ngOnChanges(): void {
    if (this.echartGeographyInstance) {
      this.updateBarChart(this.geographyBarData, this.optionsGeography, this.echartGeographyInstance);
    }
    if (this.echartChannelInstance) {
      this.updateBarChart(this.channelBarData, this.optionsChannel, this.echartChannelInstance);
    }
    if (this.echartSourceInstance) {
      this.updateBarChart(this.sourceBarData, this.optionsSources, this.echartSourceInstance);
    }
    if (this.echartCampaignInstance) {
      this.updateBarChart(this.campaignBarData, this.optionsCampaign, this.echartCampaignInstance);
    }
  }

  ngAfterViewInit() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        this.eTheme = config.variables.profit;
        if (this.geographyBarData) {
          this.optionsGeography = this.setOptions(this.eTheme, this.geographyBarData);
        }
        if (this.channelBarData) {
          this.optionsChannel = this.setOptions(this.eTheme, this.channelBarData);
        }
        if (this.sourceBarData) {
          this.optionsSources = this.setOptions(this.eTheme, this.sourceBarData);
        }
        if (this.campaignBarData) {
          this.optionsCampaign = this.setOptions(this.eTheme, this.campaignBarData);
        }
      });
  }

  setOptions(eTheme, barChartData: BarChartData) {
    return {
      backgroundColor: eTheme.bg,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(0, 0, 0, 0.3)',
          },
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: barChartData.chartLabel,
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: eTheme.axisLineColor,
            },
          },
          axisLabel: {
            color: eTheme.axisTextColor,
            fontSize: eTheme.axisFontSize,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: eTheme.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: eTheme.splitLineColor,
            },
          },
          axisLabel: {
            color: eTheme.axisTextColor,
            fontSize: eTheme.axisFontSize,
          },
        },
      ],
      series: [
        {
          // name: 'Canceled',
          type: 'bar',
          barGap: 0,
          barWidth: '20%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: eTheme.firstLineGradFrom,
              }, {
                offset: 1,
                color: eTheme.firstLineGradTo,
              }]),
            },
          },
          data: barChartData.data[0],
        },
      ],
    };
  }
  updateBarChart(barChartData: BarChartData, Options, echartInstance) {
    const options = Options;
    const series = this.getNewSeries(options.series, barChartData.data);

    echartInstance.setOption({
      series: series,
      xAxis: {
        data: barChartData.chartLabel,
      },
    });
  }

  getNewXAxis(xAxis, chartLabel: string[]) {
    return {
      ...xAxis,
      data: chartLabel,
    };
  }

  getNewSeries(series, data: number[][]) {
    return series.map((line, index) => {
      return {
        ...line,
        data: data[index],
      };
    });
  }

  onGeographyChartInit(echarts) {
    this.echartGeographyInstance = echarts;
  }
  onChannelChartInit(echarts) {
    this.echartChannelInstance = echarts;
  }
  onCampaignChartInit(echarts) {
    this.echartCampaignInstance = echarts;
  }
  onSourceChartInit(echarts) {
    this.echartSourceInstance = echarts;
  }
  resizeChart() {
    if (this.echartGeographyInstance) {
      setTimeout(() => {
        this.echartGeographyInstance.resize();
      }, 0);
    }
    if (this.echartCampaignInstance) {
      setTimeout(() => {
        this.echartCampaignInstance.resize();
      }, 0);
    }
    if (this.echartChannelInstance) {
      setTimeout(() => {
        this.echartChannelInstance.resize();
      }, 0);
    }
    if (this.echartSourceInstance) {
      setTimeout(() => {
        this.echartSourceInstance.resize();
      }, 0);
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
