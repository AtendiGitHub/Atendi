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
    cardHeight: "36.4293vh",
    cardBackground: "rgba(52, 86, 255, 1)",
    cardBorderRadius: "0",

    contentMargin: "  0",
    contentWidth: "fit-content",

    titleMargin: "0"
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
