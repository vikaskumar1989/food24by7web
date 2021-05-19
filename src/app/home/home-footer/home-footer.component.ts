import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  copyRightDate: number = Date.now();
  contactFormData: any = {
    windowNavigatorAppName: window.navigator.appName,
    windowNavigatorAppCodeName: window.navigator.appCodeName,
    windowNavigatorUserAgent: window.navigator.userAgent,
    windowNavigatorVendor: window.navigator.vendor,
  };



  constructor(private fb: FormBuilder, private db: AngularFirestore) {
    console.log()
   }
   ngOnInit(): void {
  }

   contactFormGroup = this.fb.group({
    name:['', Validators.required],
    mobile:['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999)]],
    email:['', [Validators.required, Validators.email]],
    message:['', Validators.required],
    recaptchaReactive:['', Validators.required]
   });
  
   onContactSubmit(){
     this.contactFormData = Object.assign(this.contactFormData, {date: new Date()}, this.contactFormGroup.value);
     delete this.contactFormData['recaptchaReactive'];
     console.log('HomeFooterComponent : onContactSubmit: ',this.contactFormData);
    //  this.db.collection('/getapp/contactUsWebsite/messages').add(this.contactFormData).then((res)=>{
    //    console.log('HomeFooterComponent : onContactSubmit: Message set to firebase: ', res);
    //    this.contactFormGroup.reset();
    //  })
   }

   resolved(captchaResponse: string) {
    console.log('Resolved captcha with response:', this.contactFormGroup.controls['recaptchaReactive']);
  }

  getControlValidClass(controlName:any){
    let controlValidationClass = '';
    if(this.contactFormGroup.pristine || this.contactFormGroup.controls[controlName].pristine){
      return controlValidationClass;
    }

    if(this.contactFormGroup.controls[controlName].valid){
      controlValidationClass = 'is-valid';
    } else {
      controlValidationClass = 'is-invalid';
    }

    return controlValidationClass;
  }
}
