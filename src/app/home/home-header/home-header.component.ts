
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  isHeaderSticky: boolean = false;
  selectedMenuItem: any = 'home';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }

  isHeaderMenuActive(menuItem:string){
    console.log('isHeaderMenuActive : Url ', this.router.url, 'menu item ', menuItem, this.router.url.indexOf('/home/' + menuItem));
    
    return (this.router.url.indexOf('/home/' + menuItem) ==0);
  }
}
