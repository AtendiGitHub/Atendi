import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit{


  constructor(private host: ElementRef<HTMLElement>){}
  @Input() cssVariables:any ={ 

    cardWidth: "",
    cardHeight: "",
    cardBackground: "",
    cardBorderRadius: "",

    contentMargin: "",
    contentWidth: "",

    titleMargin: ""
  }
  
  @Input() iconPath:string = "";
  @Input() title:string = "";
  @Input() body:string = "";

  ngOnInit(): void {

    for(const key in this.cssVariables){
      this.host.nativeElement.style.setProperty(`--${key}`, this.cssVariables[key]);
    }
    // console.log(Object.keys(this.cssVariables))
    
  }
}
