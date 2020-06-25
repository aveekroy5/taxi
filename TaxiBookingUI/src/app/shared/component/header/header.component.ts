import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RateChartService } from '../../../ratechart/services/ratechart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public homeHeader = false;
  bookingForm: FormGroup;
  constructor(private router: Router, private rateChartService:RateChartService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        if(event.url == '/home' || event.url == '/'){
          this.homeHeader = true;
        }
        else{
          this.homeHeader = false;
        }
        console.log(this.homeHeader)
      }
    });

    this.bookingForm = this.createBookingFormGroup();
   }
   createBookingFormGroup() {
    return new FormGroup({
      bookingname: new FormControl('', Validators.required),
      bookingemail: new FormControl(),
      bookingphone: new FormControl(),
      bookingephone: new FormControl(),
      bookingDate: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.bookingForm.value);  // {first: 'Nancy', last: 'Drew'}
    this.rateChartService.taxiBooking(this.bookingForm.value)
    .subscribe(resp => {
      console.log('resp',resp)
    }, (err) => {
      console.error(err);
    })
  }

}
