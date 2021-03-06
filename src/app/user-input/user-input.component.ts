import { Component, OnInit, Directive } from '@angular/core';
import { UserData } from '../user-data';
import { PostDataService } from '../services/post-data.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
//import { MdDatepickerModule } from '@angular/material';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [UserData, PostDataService]
})

export class UserInputComponent implements OnInit {

  form: FormGroup;
  usrdata = {
    'user' : 'testuser',
    'password' : 'testpassword',
    'data' : undefined
  };
  units = [1,2,3,4];

  constructor(private postData: PostDataService, public fb: FormBuilder) {
      this.form = fb.group({
      unit: '',
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
}
