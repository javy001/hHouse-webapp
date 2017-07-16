import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-chart-parent',
  templateUrl: './chart-parent.component.html',
  styleUrls: ['./chart-parent.component.css'],
  providers: [ChartDataService]
})
export class ChartParentComponent implements OnInit {

    cabinetId: number;
    data: Object;
    metrics = [];

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private chartDataService: ChartDataService
    ) { }

    ngOnInit() {
      this.route.params
          .subscribe(res => this.cabinetId = +res['id']);
      this.chartDataService.getData(this.cabinetId)
        .subscribe(res=> {
            this.data = res
            for(let metric in res['time_series']){
                this.metrics.push(metric);
            }
        });
    }

}
