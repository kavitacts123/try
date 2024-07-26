import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { Form2Component } from './form2/form2.component';
import { DestinationComponent } from './destination/destination.component';
import { DateComponent } from './date/date.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  {path: 'booking-form', component: BookingFormComponent},
  {path: 'destination', component:DestinationComponent},
  {path: 'form2', component: Form2Component},
  {path: 'blog', component: BlogComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'date', component:DateComponent},
  {path: 'peoples', component:PeoplesComponent},
  {path: 'hotel_list', component:HotelListComponent},
  {path: 'payment', component:PaymentComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }