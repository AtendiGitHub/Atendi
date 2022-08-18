import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() cssVariables:{height:string, width:string, backgroundColor:string} = {height:"", width:"", backgroundColor:""};
  @Input() iconPath:string = "";
  @Input() title:string = "";
  @Input() body:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
