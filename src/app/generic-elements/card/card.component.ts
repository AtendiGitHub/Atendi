import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() cssVariables:{height:string, width:string, backgroundColor:string, borderRadius:string} =
  {height:"", width:"", backgroundColor:"", borderRadius:""};
  
  @Input() iconPath:string = "";
  @Input() title:string = "";
  @Input() body:string = "";

  cardCssVariables:any;

  constructor() { }

  ngOnInit(): void {
    this.cardCssVariables = document.querySelector(".card-body");
    this.cardCssVariables.style.height = this.cssVariables.height;
    this.cardCssVariables.style.width = this.cssVariables.width;
    this.cardCssVariables.style.background = this.cssVariables.backgroundColor;
    this.cardCssVariables.style.borderRadius = this.cssVariables.borderRadius;
  }

}
