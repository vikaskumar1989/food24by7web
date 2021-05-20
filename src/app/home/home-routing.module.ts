import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeFaqsComponent } from './home-faqs/home-faqs.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomePrivacyComponent } from './home-privacy/home-privacy.component';
import { HomeTermsComponent } from './home-terms/home-terms.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path:'', 
    redirectTo: '/home/main', pathMatch:'full'
  },
  {path:'main', component: HomeHeroComponent},
  {path:'about', component: HomeAboutComponent},
  {path:'feature', component: HomeFeatureComponent},
  {path:'terms', component: HomeTermsComponent},
  {path:'privacy', component: HomePrivacyComponent},
  {path:'faqs', component: HomeFaqsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
