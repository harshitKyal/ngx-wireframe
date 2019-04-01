import { Component, OnDestroy, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';
import { ProfitChart } from '../../@core/data/profit-chart';
import { OrdersProfitChartData } from '../../@core/data/orders-profit-chart';
import { LayoutService } from '../../@core/utils/layout.service';
import { OrdersChart } from '../../@core/data/orders-chart';
import { DashboardSampleService } from '../../@core/mock/dashboard-sample.service';

interface CardSettings {
  title: string;
  count: number;
  percentage: number;
  increement: boolean;
}

export class BarChartData {
  chartLabel: string[];
  data: number[][];
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit, OnDestroy, OnChanges {

  private alive = true;
  profitChartData: ProfitChart;
  barChartData: BarChartData;
  ordersChartData: OrdersChart;

  echartsIntance: any;
  echartInstance: any;
  options: any = {};
  option: any = {};

  solarValue: number;
  newUsers: CardSettings = {
    title: 'New users',
    count: 13021,
    percentage: 124,
    increement: true,
  };
  newLeads: CardSettings = {
    title: 'New leads',
    count: 1520,
    percentage: 59,
    increement: true,
  };
  newCustomer: CardSettings = {
    title: 'New Customers',
    count: 780,
    percentage: 35,
    increement: true,
  };
  leadGenerationRate: CardSettings = {
    title: 'Lead generation rate',
    count: 0,
    percentage: 34,
    increement: true,
  };
  customerGenerationRate: CardSettings = {
    title: 'Customer generation rate',
    count: 0,
    percentage: 21,
    increement: true,
  };

  statusCards: string;
  period: string = 'week';

  commonStatusCardsSet: CardSettings[] = [
    this.newUsers,
    this.newLeads,
    this.newCustomer,
    this.leadGenerationRate,
    this.customerGenerationRate,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.newUsers,
        },
        {
          ...this.newLeads,
        },
        {
          ...this.newCustomer,
        },
        {
          ...this.leadGenerationRate,
        },
        {
          ...this.customerGenerationRate,
        },
      ],
    };

  // corporate: [
  //   {
  //     ...this.lightCard,
  //     type: 'warning',
  //   },
  //   {
  //     ...this.rollerShadesCard,
  //     type: 'primary',
  //   },
  //   {
  //     ...this.wirelessAudioCard,
  //     type: 'danger',
  //   },
  //   {
  //     ...this.coffeeMakerCard,
  //     type: 'secondary',
  //   },
  constructor(private themeService: NbThemeService, private ordersProfitChartService: OrdersProfitChartData,
    private solarService: SolarData, private layoutService: LayoutService,
    private dashboardService: DashboardSampleService) {
    this.getProfitChartData(this.period);
    this.getOrdersChartData(this.period);

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });

    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  getGraphData() {
    this.dashboardService.getJSON()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        console.log('data', data);
        this.barChartData = data;
        console.log('barChartData', this.barChartData);

      });
  }

  getProfitChartData(period: string) {
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(profitChartData => {
        this.profitChartData = profitChartData;
        console.log('prfit', this.profitChartData);
      });
  }

  getOrdersChartData(period: string) {
    this.ordersProfitChartService.getOrdersChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(ordersChartData => {
        this.ordersChartData = ordersChartData;
      });
  }
  ngOnChanges(): void {
    if (this.echartsIntance) {
      this.updateProfitChartOptions(this.profitChartData);
    }
    if (this.option) {
      this.updateOrdersChartOptions(this.ordersChartData);
    }
  }

  ngAfterViewInit() {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        const eTheme: any = config.variables.profit;
        const oTheme: any = config.variables.orders;
        this.setOption(oTheme);
        this.updateOrdersChartOptions(this.ordersChartData);
        this.setOptions(eTheme);
      });
  }

  setOptions(eTheme) {
    this.options = {
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
          data: this.profitChartData.chartLabel,
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
          name: 'Canceled',
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
          data: this.profitChartData.data[0],
        },
        {
          name: 'Payment',
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: eTheme.secondLineGradFrom,
              }, {
                offset: 1,
                color: eTheme.secondLineGradTo,
              }]),
            },
          },
          data: this.profitChartData.data[1],
        },
        {
          name: 'All orders',
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: eTheme.thirdLineGradFrom,
              }, {
                offset: 1,
                color: eTheme.thirdLineGradTo,
              }]),
            },
          },
          data: this.profitChartData.data[2],
        },
      ],
    };
  }

  setOption(eTheme) {
    this.option = {
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
  updateProfitChartOptions(profitChartData: ProfitChart) {
    const options = this.options;
    const series = this.getNewSeries(options.series, profitChartData.data);

    this.echartsIntance.setOption({
      series: series,
      xAxis: {
        data: this.profitChartData.chartLabel,
      },
    });
  }

  updateOrdersChartOptions(ordersChartData: OrdersChart) {
    const options = this.option;
    const series = this.getNewSeries(options.series, ordersChartData.linesData);
    const xAxis = this.getNewXAxis(options.xAxis, ordersChartData.chartLabel);

    this.option = {
      ...options,
      xAxis,
      series,
    };
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

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }
  onLineChartInit(echarts) {
    this.echartInstance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      // Fix recalculation chart size
      // TODO: investigate more deeply
      setTimeout(() => {
        this.echartsIntance.resize();
      }, 0);
    }
    if (this.echartInstance) {
      // Fix recalculation chart size
      // TODO: investigate more deeply
      setTimeout(() => {
        this.echartInstance.resize();
      }, 0);
    }
  }

  ngOnDestroy() {
    this.alive = false;
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
}
