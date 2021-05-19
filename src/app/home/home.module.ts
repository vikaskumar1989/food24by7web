import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeTestimonialComponent } from './home-testimonial/home-testimonial.component';
import { HomeCounterComponent } from './home-counter/home-counter.component';
import { MaterialModule } from '../material-ui.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeFeatureComponent,
    HomeAboutComponent,
    HomeHeroComponent,
    HomeVideoComponent,
    HomeTestimonialComponent,
    HomeCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
