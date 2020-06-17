import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password-validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

 registrationForm: FormGroup;

get userName(){
  return this.registrationForm.get('userName');
}
get email(){ //?
  return this.registrationForm.get('email');
}

get alternateEmails(){
  return this.registrationForm.get('alternateEmails') as FormArray;
}

addAlternateEmail(){
  this.alternateEmails.push(this._fb.control(''))
}
  constructor(private _fb : FormBuilder){}

ngOnInit(){

  this.registrationForm = this._fb.group({
    userName:['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/),forbiddenNameValidator(/admin/), forbiddenNameValidator(/username/), forbiddenNameValidator(/userName/)]],
    password:[''],
    confirmPassword:[''],
    email: [''],
    subscribe: [false],
    address: this._fb.group({
      city:[''],
      state: [''],
      postalCode: ['']
    }),
    alternateEmails:this._fb.array([])
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
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue =>{
      const email=this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required)
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
}

 
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

