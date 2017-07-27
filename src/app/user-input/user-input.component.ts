import { Component, OnInit, Directive } from '@angular/core';
import { UserData } from '../user-data';
import { PostDataService } from '../services/post-data.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [UserData, PostDataService]
})

export class UserInputComponent implements OnInit {

  form: FormGroup;
  usrdata = {
    'username' : 'testuser',
    'password' : 'testpassword',
    'data' : undefined
  };

  constructor(private postData: PostDataService, public fb: FormBuilder) {
      this.form = fb.group({
      water: ['', Validators.required],
      grow: '',
      micro: '',
      bloom: '',
      roots: '',
      light: '',
      height: '',
    });
  }

  ngOnInit() {
  }

  ngOnSubmit() {
    this.usrdata.data = this.form.value;
  	console.log(this.postData.submitData(this.usrdata));
    this.form.reset();
  }

}
