import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  cardCssVariables:{height:string, width:string, backgroundColor:string, borderRadius:string} = {height:'200px', width:'200px', backgroundColor:'white', borderRadius:'0px'};

  constructor() { }

  ngOnInit(): void {
  }

}
