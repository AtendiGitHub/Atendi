import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent{


  cardCssVariables:{} =
  { 
    cardWidth: "26.35416vw",
    cardHeight: "39.4293vh",
    cardBackground: "rgba(52, 86, 255, 1)",

    contentMargin: "0  3vw 0  3vw",
    contentWidth: "fit-content",

    titleMargin: "-18px 0 0 0 ",
    cardPadding: "2vh 0 0 0"
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
}
