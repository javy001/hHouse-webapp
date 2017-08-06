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
    'unit' : '0',
    'data' : undefined
  };

  constructor(private postData: PostDataService, public fb: FormBuilder) {
      this.form = fb.group({
      water: '',
      grow: '',
      micro: '',
      bloom: '',
      roots: '',
      light: '',
      height: '',
      comment: '',
      date: [new Date(), Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnSubmit() {
    this.usrdata.data = this.form.value;
  	console.log(this.postData.submitData(this.usrdata));
    this.form.reset();
    this.form.patchValue({date: new Date()});
  }
}
