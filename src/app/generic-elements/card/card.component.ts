import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit{

  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--cardBackground: ${value}`);
  }

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
    console.log(Object.keys(this.cssVariables));
  }
}
