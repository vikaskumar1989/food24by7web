
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  isHeaderSticky: boolean = false;
  selectedMenuItem: any = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isHeaderSticky = window.pageYOffset >= 10;
  }

  isHeaderMenuActive(menuItem:any){
    return menuItem == this.selectedMenuItem;
  }

  scrollToElement(elementName: any) {
    var element = document.getElementById(elementName);
    console.log('HomeHeaderComponent: scrollToElement : ', element);
    element?.scrollIntoView({behavior: 'smooth'})
    this.selectedMenuItem = elementName
  }
}
