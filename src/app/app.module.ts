import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { NgxDropzoneModule } from 'ngx-dropzone';
defineLocale('en-gb', enGbLocale);

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Form2Component } from './form2/form2.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DestinationComponent } from './destination/destination.component';
import { DateComponent } from './date/date.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    Form2Component,
    BookingFormComponent,
    DestinationComponent,
    DateComponent,
    PeoplesComponent,
    RoomsComponent,
    HotelListComponent,
    PaymentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule,
    NgxDaterangepickerMd.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }