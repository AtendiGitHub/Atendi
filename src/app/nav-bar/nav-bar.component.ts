import { Component, EventEmitter, Output } from '@angular/core';
import { HostListener } from "@angular/core";



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  @Output() pageTarget = new EventEmitter<string>();
  @HostListener('window:scroll', ['$event'])

  
  onWindowScroll() {

    let navbar = document.querySelector('.nav-bar') as HTMLElement;

    if (window.pageYOffset > navbar.clientHeight){ 

      navbar.classList.add("scrolled-down-navbar");
      navbar.classList.remove("static-navbar");
      
    }else{

      navbar.classList.add("static-navbar");     
    }
  }

  sendSelectedPage(e:any) {this.pageTarget.emit(e.target.className);}
}
