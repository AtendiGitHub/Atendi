import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit{

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
