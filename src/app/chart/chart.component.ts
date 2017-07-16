import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
    constructor() {}

    @Input('title') title: string;
    @Input() data: Array<any>;

    //chart = new Chart(this.chartOptions);
    chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
    xAxis: [{
        type: 	'datetime',
        tickInterval:  3 * 24 * 3600 * 1000,
        startOnTick: true,
        startOfWeek: 0
    }],
    yAxis: [{
        title: {
            text: ""
        }
    }],
    plotOptions: {
        line: {
            marker: {
                enabled: false
                }
            }
    },
    tooltip : {
            valueDecimals: 2,
            shared : true,
            split: true,
            xDateFormat: "%A, %b %e"
     },
      series: []
    });



    @Input() chartData: Object;

    ngOnInit(){

        this.chart.addSerie({name: this.title, data: this.data});
        this.chart.options.title.text = this.title;
    }


}
