import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  cardCssVariables:{height:string, width:string, backgroundColor:string, borderRadius:string} = 
  {height:'200px', width:'200px', backgroundColor:'pink', borderRadius:'0px'};
  
  cardsData:{iconPath:string, title:string, body:string}[] = [
    {
      iconPath:"",
      title:"Flexibility & Resources",
      body:"create and manage a classroom or a conference room with total flexibility and resources rarely available in a physical setting from any device with an internet connection"
    },
    {
      iconPath:"",
      title:"Supports Large Audiences",
      body:"A classroom or a conference room of infinite size, where every student or participant is in the first row. An infinite classroom or a conference room, where the physical location of the participants is unrestricted."
    }
  ]

  ngOnInit(): void {
  }

}
