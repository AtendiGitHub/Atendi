import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {

  @Input() valuesList:string[] = ['canada', 'montenegreo', 'livan', 'clara'];
  @Input() dropDownName:string = "cool";
  @Output() emitChosenValue =  new EventEmitter<string>();

  chosenValue:string = " ";
  hideOptions:boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  sendChosenValue(value:string){
    this.chosenValue = value;
    this.hideOptions = true;
    this.emitChosenValue.emit(value);
  }
}
