import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'Atendi';

  constructor(private router: Router){}

  ngOnInit() {this.router.navigate(["/"]);}

  scrollToPage(e:string){
   document.getElementById(e)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
