import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() cssVariables:{height:string, width:string, backgroundColor:string} = {height:"", width:"", backgroundColor:""};
  @Input() icon:any;
  @Input() title:string = "Privacy & Confident";
  @Input() body:string = "Private and confidential virtual server solution customized to your requirements";


  constructor() { }

  ngOnInit(): void {
  }

}
