import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent implements OnInit {


  cardCssVariables:{} =
  { 
    cardWidth: "26.35416vw",
    cardHeight: "43.03405vh",
    cardBackground: "rgba(52, 86, 255, 1)",
    cardBorderRadius: "0",

    contentMargin: "  1.289vh 2.302vw 1.7399vh 2.302vw",
    contentWidth: "fit-content",

    titleMargin: "3.159vh 0  1.289vh 0"
  }

  cardsData:{iconPath:string, title:string, body:string}[] = [
    {
      iconPath:"../../../assets/icon-svg/resize-icon.svg",
      title:"Resize",
      body:"Resizing VPS as your needs change - increase or decrease the amount of CPU and RAM available to a VPS and permanently increases thesize of VPS disk."
    },
    {
      iconPath:"../../../assets/icon-svg/cart-icon.svg",
      title:"Order",
      body:"Order additional VPS as your needs change."
    },
    {
      iconPath:"../../../assets/icon-svg/no-smile-icon.svg",
      title:"Specify",
      body:"Each VPS may be ordered with its own resource specifications and location"
    }
  ]
  ngOnInit(): void {
  }

}
