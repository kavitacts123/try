import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { Form2Component } from './form2/form2.component';
import { DestinationComponent } from './form2/destination/destination.component';
import { DateComponent } from './form2/date/date.component';
import { RoomsComponent } from './form2/rooms/rooms.component';
import { PeoplesComponent } from './form2/peoples/peoples.component';
import { HotelListComponent } from './form2/hotel-list/hotel-list.component';
import { PaymentComponent } from './form2/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'form2', component: Form2Component, children: [
      { path: 'destination', component: DestinationComponent },
      { path: 'hotel_list', component: HotelListComponent },
      { path: 'date', component: DateComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'peoples', component: PeoplesComponent },
      { path: 'payment', component: PaymentComponent },
      { path: '', redirectTo: 'destination', pathMatch: 'full' } // Default child route
    ]
  },
  { path: '**', redirectTo: '/home' }, // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
