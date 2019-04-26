import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../@core/utils';
import { takeWhile } from 'rxjs/operators';
import { DashboardSampleService } from '../../@core/mock/dashboard-sample.service';
import { CardReqObj, CardResponseObj } from '../../@theme/model/acquisition-card';
import { BarChartData, BarChartReq, LineChartReq, LineChartData } from '../../@theme/model/acquisition-chart';
import { AcquisitionService } from '../../@theme/services/acquisition.service';
import { OrdersProfitChartData } from '../../@core/data/orders-profit-chart';
import { OrdersChart } from '../../@core/data/orders-chart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})

export class WebsitesComponent implements AfterViewInit, OnDestroy, OnChanges {

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


  lineChartReqObj: LineChartReq;

  lineChartUserData: LineChartData;

  optionsLineUser: any = {};
  ordersChartData: OrdersChart;
  eLineChartUserInstance: any;

  titleGeography = 'Top 5 Geographies- City';
  titleChannel = 'Top 5 channels';
  titleSouce = 'Top 5 sources- source/med combo';
  titleCampaign = 'Top 5 Campaigns';
  titleLineUser = 'New Users';
  titleLineLeads = 'New Leads & Lead Generation Rate';
  titleLineCustomers = 'New Customers & Customer Generation Rate';
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

  constructor(private themeService: NbThemeService, private acquisitionServcie: AcquisitionService,
    private layoutService: LayoutService, private ordersProfitChartService: OrdersProfitChartData,
    private dashboardService: DashboardSampleService, private http: HttpClient) {
    this.cardReqObj = new CardReqObj();
    this.cardReqObj.channel_type = 'website';
    this.barChartReqObj = new BarChartReq();
    this.barChartReqObj.channel_type = 'website';
    this.getGeographyBarData();
    this.getChannelBarData();
    this.getCampaignBarData();
    this.getSourceBarData();
    this.getUsersCount();
    this.getLeadsCount();
    this.getCustomersCount();
    this.getLeadsRate();
    this.getCustomersRate();
    this.getOrdersChartData(this.period);

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
  getOrdersChartData(period: string) {
    this.ordersProfitChartService.getOrdersChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(ordersChartData => {
        this.ordersChartData = ordersChartData;
        console.log('ordee', this.ordersChartData);
      });
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
    if (this.optionsLineUser) {
      this.updateOrdersChartOptions(this.ordersChartData);
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
        const oTheme: any = config.variables.orders;
          this.setOption(oTheme);
          this.updateOrdersChartOptions(this.ordersChartData);
      });
  }
  setOption(eTheme) {
    this.optionsLineUser =  {
      grid: {
        left: 40,
        top: 20,
        right: 0,
        bottom: 40,
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: eTheme.tooltipLineColor,
            width: eTheme.tooltipLineWidth,
          },
        },
        textStyle: {
          color: eTheme.tooltipTextColor,
          fontSize: eTheme.tooltipFontSize,
          fontWeight: eTheme.tooltipFontWeight,
        },
        position: 'top',
        backgroundColor: eTheme.tooltipBg,
        borderColor: eTheme.tooltipBorderColor,
        borderWidth: 3,
        formatter: (params) => {
          return Math.round(parseInt(params.value, 10));
        },
        extraCssText: eTheme.tooltipExtraCss,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 5,
        data: [],
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '2',
          },
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '1',
          },
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisTick: {
          show: false,
        },
        splitLine: {

          lineStyle: {
            color: eTheme.yAxisSplitLine,
            width: '1',
          },
        },
      },
      series: [
        this.getFirstLine(eTheme),
        this.getSecondLine(eTheme),
        this.getThirdLine(eTheme),
      ],
    };
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

  updateOrdersChartOptions(lineChartData: LineChartData) {
    const options = this.optionsLineUser;
    const series = this.getNewSeries(options.series, lineChartData.linesData);
    const xAxis = this.getNewXAxis(options.xAxis, lineChartData.chartLabel);

    this.optionsLineUser = {
      ...options,
      xAxis,
      series,
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

  onLineChartInit(echarts) {
    this.eLineChartUserInstance = echarts;
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
    if (this.eLineChartUserInstance) {
      setTimeout(() => {
        this.eLineChartUserInstance.resize();
      }, 0);
    }
  }

  getFirstLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          opacity: 0,
        },
      },
      lineStyle: {
        normal: {
          width: 0,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.firstAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.firstAreaGradTo,
          }]),
          opacity: 1,
        },
      },
      data: [],
    };
  }

  getSecondLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: eTheme.itemBorderColor,
          borderWidth: 2,
          opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.secondLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.secondLineGradTo,
          }]),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.secondAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.secondAreaGradTo,
          }]),
        },
      },
      data: [],
    };
  }

  getThirdLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: eTheme.itemBorderColor,
          borderWidth: 2,
          opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.thirdLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.thirdLineGradTo,
          }]),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.thirdAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.thirdAreaGradTo,
          }]),
        },
      },
      data: [],
    };
  }
  ngOnDestroy() {
    this.alive = false;
  }
}

