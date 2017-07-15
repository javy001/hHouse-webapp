import { Component, OnInit } from '@angular/core';
import { CabinetListService } from '../services/cabinet-list.service';

@Component({
  selector: 'cabinet-list',
  templateUrl: './cabinet-list.component.html',
  styleUrls: ['./cabinet-list.component.css'],
  providers: [ CabinetListService ]
})
export class CabinetListComponent implements OnInit {

  constructor(private cabinetListService: CabinetListService) { }

  cabinetList = {};
  names = []
  metrics = []

  ngOnInit() {
        this.cabinetListService.getCabinetList()
        .subscribe(res => {
            this.cabinetList = res
            var i = 0;
            for(let name in res){
                this.names.push(name);
                if(i==0){
                    for(let metric in res[name]['data']){
                        this.metrics.push(metric);
                    }
                }
                i++;
            }
        });

  }

}
