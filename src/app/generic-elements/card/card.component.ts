import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit{

  // @HostBinding("attr.style")


  // public get valueAsStyle(): any {

  //   for (let key in this.cssVariables) {
  //     console.log(key)
  //   return this.sanitizer.bypassSecurityTrustStyle(`--cardBackground: ${"black"}`);
  //   }
    
  // }
  

  constructor(private sanitizer: DomSanitizer) {}

  @Input() cssVariables:{} ={ 

    cardWidth: "",
    cardHeight: "",
    cardBackground: "",
    cardBorderRadius: "",

    contentWidth: "",
    contentMargin: "",

    titleMargin: ""
  }
  
  @Input() iconPath:string = "";
  @Input() title:string = "";
  @Input() body:string = "";

  ngOnInit(): void {
    for (let key in this.cssVariables) {
      console.log(key)
    }
  }
}
