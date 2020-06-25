import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookingComponent } from './booking/booking.component';
import { RateChartComponent } from './rate-chart/rate-chart.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YourAdvantageComponent } from './your-advantage/your-advantage.component';
import { ToAirportComponent } from './to-airport/to-airport.component';



@NgModule({
  declarations: [
    AboutUsComponent, 
    ContactUsComponent, 
    BookingComponent, 
    RateChartComponent, 
    TestimonialComponent, DashboardComponent, YourAdvantageComponent, ToAirportComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
