
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog  } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  isHeaderSticky: boolean = false;
  selectedMenuItem: any = 'home';

  constructor(private router: Router, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }

  isHeaderMenuActive(menuItem:string){
    
    return (this.router.url.indexOf('/home/' + menuItem) >= 0);
  }

  openGetAppLinkDialog(){
    const dialogRef = this.dialog.open(GetAppLinkDialog);
    console.log('Home Header to openGetAppLinkDialog: ')

    dialogRef.afterClosed().subscribe(res => {
      console.log('Home Header Get App Link Dialog closed: ', res)
    })
  }
}


@Component({
  selector: 'get-app-link-dialog',
  templateUrl: 'get-app-link-dialog.html',
})
export class GetAppLinkDialog {
  // constructor(public fb:FormBuilder, public dialog: MatDialog){}

  // appLinkFormGroup = this.fb.group({mobile:['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999)]]});

  // getAppLinkSubmit(){}
}