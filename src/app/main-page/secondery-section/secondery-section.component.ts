import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondery-section',
  templateUrl: './secondery-section.component.html',
  styleUrls: ['./secondery-section.component.less']
})
export class SeconderySectionComponent implements OnInit {

  expCardCssVariables:{height:string, width:string, backgroundColor:string, borderRadius:string} = 
  {height:'50.49742vh', width:'28.9791vw', backgroundColor:'transparent', borderRadius:'0px'};

  problemCardCssVariables:{height:string, width:string, backgroundColor:string, borderRadius:string} = 
  {height:'50.49742vh', width:'28.9791vw', backgroundColor:'transparent', borderRadius:'0px'};
  
  cardsData:{iconPath:string, title:string, body:string}[] = [
    {
      iconPath:"../../assets/icon-svg/dots/one-dot.svg",
      title:"Flexibility & Resources",
      body:"create and manage a classroom or a conference room with total flexibility and resources rarely available in a physical setting from any device with an internet connection"
    },
    {
      iconPath:"../../assets/icon-svg/dots/two-dot.svg",
      title:"Supports Large Audiences",
      body:"A classroom or a conference room of infinite size, where every student or participant is in the first row. An infinite classroom or a conference room, where the physical location of the participants is unrestricted."
    },
    {
      iconPath:"../../assets/icon-svg/dots/three-dot.svg",
      title:"Study & Work From Home",
      body:"Where the participants can comfortably access this classroom, conference room, team meeting, or any other remote work location from the safety and comfort of their home."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
