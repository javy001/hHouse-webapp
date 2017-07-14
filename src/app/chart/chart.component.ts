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

    //chart = new Chart(this.chartOptions);
    chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'test'
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
            text: "Lift Over Control (%)"
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
        for(var series in this.chartData){
            if(series != 'Control'){
                this.chart.options.title.text = this.title;
                this.chart.addSerie({name: series, data: this.chartData[series]});
            }

        }
    }


}
