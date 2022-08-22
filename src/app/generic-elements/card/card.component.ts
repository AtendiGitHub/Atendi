import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit{

  @Input() cssVariables:{} ={ 

    cardCssVariabls:
    {
    height:"", 
    width:"", 
    backgroundColor:"", 
    borderRadius:""
    },

    contentCssVariables:
    {
      width:"",
      margin:"",
    },

    titleCssVariables:
    {
      margin:""
    }
  }
  
  @Input() iconPath:string = "";
  @Input() title:string = "";
  @Input() body:string = "";

  ngOnInit(): void {
  }
}
