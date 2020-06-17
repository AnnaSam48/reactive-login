import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password-validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

get userName(){
  return this.registrationForm.get('userName');
}
  constructor(private _fb : FormBuilder){}
  registrationForm = this._fb.group({
    userName:['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/),forbiddenNameValidator(/admin/), forbiddenNameValidator(/username/), forbiddenNameValidator(/userName/)]],
    password:[''],
    confirmPassword:[''],
    address: this._fb.group({
      city:[''],
      state: [''],
      postalCode: ['']
    })
    },{validator: passwordValidator});
    /* registrationForm = new FormGroup({
     userName: new FormControl('Sakura'),
     password: new FormControl(''),
     confirmPassword: new FormControl(''),
      address : new FormGroup({
       city: new FormControl(''),
       state: new FormControl(''),
       postalCode: new FormControl('')
     })
  })*/
loadAPI(){
  this.registrationForm.patchValue({
    userName:'Alias',
    password: 'test',
    confirmPassword: 'test',
  /*  address:{
      city:'Lunatic',
      state:'Brainiac',
      postalCode:'123456'
    }*/
  })
}
}

