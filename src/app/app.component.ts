import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private _fb : FormBuilder){}
  registrationForm = this._fb.group({
    userName:['Sakura'],
    password:[''],
    confirmPassword:[''],
    address: this._fb.group({
      city:[''],
      state: [''],
      postalCode: ['']
    })
    });
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

