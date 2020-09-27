import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import {Options} from 'highcharts';
import {DataService} from '../services/data.service';
// @ts-ignore
import sriLanka from '@highcharts/map-collection/countries/lk/lk-all.geo.json';

// import sriLanka from '../../assets/lk-all.geo.json';

@Component({
  selector: 'app-sri-lanka-map',
  templateUrl: './sri-lanka-map.component.html',
  styleUrls: ['./sri-lanka-map.component.css']
})
export class SriLankaMapComponent implements OnInit, OnDestroy {
  mapTitle = 'Sri Lanka map Title';
  mapSubTitle = 'Sri Lanka map sub Title';
  seriesName = 'Series Name';

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  data = [
    ['lk-bc', 1],
    ['lk-mb', 2],
    ['lk-ja', 3],
    ['lk-kl', 4],
    ['lk-ky', 5],
    ['lk-mt', 6],
    ['lk-nw', 7],
    ['lk-ap', 8],
    ['lk-pr', 9],
    ['lk-tc', 10],
    ['lk-ad', 11],
    ['lk-va', 12],
    ['lk-mp', 13],
    ['lk-kg', 14],
    ['lk-px', 15],
    ['lk-rn', 16],
    ['lk-gl', 17],
    ['lk-hb', 18],
    ['lk-mh', 19],
    ['lk-bd', 20],
    ['lk-mj', 21],
    ['lk-ke', 22],
    ['lk-co', 23],
    ['lk-gq', 24],
    ['lk-kt', 25]
  ];

  chartOptions: Options = {
    chart: {
      map: sriLanka as any
    },
    title: {
      text: this.mapTitle
    },
    subtitle: {
      text: this.mapSubTitle
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0,
      max: 1000,
      minColor: '#ffffe0',
      maxColor: '#db4551'
    },
    series: [
      {
        type: 'map',
        name: this.seriesName,
        states: {
          hover: {
            color: '#2c8bff'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        allAreas: false,
        data: this.data as any
      }
    ],
    exporting: {
      enabled: true
    },
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

    this.dataService.getChartData().subscribe(data => {
      this.updateData(data);
    });

    setTimeout(() => {
      this.dataService.updateChartData();
    }, 5000);

  }

  ngOnDestroy(): void {
    if (this.dataService.getChartData() !== undefined) {
      this.dataService.unsubscribeChartDataEventSubscription();
    }
  }

  updateData(data): void {
    this.chartOptions.series[0] = {
      type: 'map',
      name: this.seriesName,
      states: {
        hover: {
          color: '#2c8bff'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: data as any
    };
    this.updateFlag = true;
  }


}
