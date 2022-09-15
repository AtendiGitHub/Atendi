import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as countriesData from '../../../assets/countries.json';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit{

  @Output() userInputData = new EventEmitter<{}>();
  isFormValid:boolean = true; 

  userData:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl('')
  });

  countriesList:string[] = [];
  
  ngOnInit(): void {
    (countriesData as any).default.forEach((country:{name:string}) => {
      this.countriesList.push(country.name);
    });
  }

  sendData(emailValidation:any){
    emailValidation != null? console.log("not validate"): this.userInputData.emit(JSON.stringify(this.userData.value));
  }

}
