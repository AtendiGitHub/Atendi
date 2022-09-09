import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as countriesData from '../../../assets/countries.json';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {

  @Output() userInputData = new EventEmitter<{}>();

  userData:any = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl('')
  });

  countries:any = (countriesData as any).default;

  sendData(){
    this.userInputData.emit(this.userData.value);
    console.log(this.userData.value);
  }

  ngOnInit(): void {
  }

}
