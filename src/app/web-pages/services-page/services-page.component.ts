import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.less']
})
export class ServicesPageComponent implements OnInit {

  cardCssVariables:{} =
  { 
    cardWidth: "23.4375vw",
    cardHeight: "43.03405vh",
    cardBackground: "rgba(248, 248, 250, 0.1)",
    cardBorderRadius: "10px",

    contentMargin: "  1.289vh 2.302vw 1.7399vh 2.302vw",
    contentWidth: "fit-content",

    titleMargin: "3.159vh 0  1.289vh 0",
    cardPadding: "4vh 0 0 0"
  }

  cardsData:{iconPath:string, title:string, body:string}[] = [
  {
    iconPath:"../../assets/icon-svg/privacy-icon.svg",
    title:"Privacy & Confident",
    body:"Private and confidential virtual server solution customized to your requirements"
  },

  {
    iconPath:"../../assets/icon-svg/like-icon.svg",
    title:"Comfort",
    body:"Install your favorite software and OSs,host your files, run applications, and much more. Also an dedicated IP address."
  },

  {
    iconPath:"../../assets/icon-svg/credit-card-icon.svg",
    title:"No Pay No Use",
    body:"Place any number of ordered VPS on standby, and pay only for the ones you use"
  },

  {
    iconPath:"../../assets/icon-svg/cloud.svg",
    title:"Easy & Convenient",
    body:"Easy and convenient control interface. Fully customizable & Fully scalable."
  },

  {
    iconPath:"../../assets/icon-svg/gear-icon.svg",
    title:"Operating Systems",
    body:"Private and confidential virtual server solution customized to your requirements"
  },

  {
    iconPath:"../../assets/icon-svg/clone-deploy-icon.svg",
    title:"Clone & Deploy",
    body:"Ability to clone your entire VPS to image and deploy it"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
