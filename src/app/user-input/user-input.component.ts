import { Component, OnInit, Directive } from '@angular/core';
import { UserData } from '../user-data';
import { PostDataService } from '../services/post-data.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CabinetListComponent } from '../cabinet-list/cabinet-list.component';
import { CabinetListService } from '../services/cabinet-list.service';
//import { MdDatepickerModule } from '@angular/material';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [UserData, PostDataService, CabinetListService]
})

export class UserInputComponent implements OnInit {

  form: FormGroup;
  usrdata = {
    'user' : 'testuser',
    'password' : 'testpassword',
    'data' : undefined
  };
  units: string[];


  constructor(private postData: PostDataService, public fb: FormBuilder, private cabinetListService: CabinetListService) {
    this.units = this.getUnitList();

    this.form = fb.group({
    unit: ['', Validators.required],
    water: '',
    grow: '',
    micro: '',
    bloom: '',
    roots: '',
    light: '',
    height: '',
    comment: '',
    logdate: [new Date(), Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnSubmit() {
    this.usrdata.data = this.form.value;
  	console.log(this.postData.submitData(this.usrdata));
    this.form.reset();
    this.form.patchValue({logdate: new Date()});
  }

  getUnitList(){
    var units = [];
    this.cabinetListService.getCabinetList()
    .subscribe(res => {
        for(let name in res){
            units.push(name);
        }
    });
    return units;
  }
}
