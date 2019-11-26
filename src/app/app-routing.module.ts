import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogSliderComponent } from './blog-slider/blog-slider.component';
import { ListOpenDonationComponent } from './list-open-donation/list-open-donation.component';
import { DonasiSayaComponent } from './donasi-saya/donasi-saya.component';
import { ListInboxComponent } from './list-inbox/list-inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SAndKComponent } from './s-and-k/s-and-k.component';
import { DetailOpenDonasiComponent } from './detail-open-donasi/detail-open-donasi.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountComponent } from './account/account.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path : '', redirectTo : '/home',  pathMatch :'full'},
  {path : 'home', component : HomeComponent},
  {path : 'inbox', component : ListInboxComponent},
  {path : 'detaildonasi', component : DetailOpenDonasiComponent}, 
  {path : 'donasisaya', component :DonasiSayaComponent },
  {path : 'account', component : AccountComponent},
  {path : 'payment', component : PaymentComponent },
  {path : '**', component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  BlogSliderComponent,
  ListOpenDonationComponent,
  DonasiSayaComponent,
  ListInboxComponent,
  NotificationComponent,
  RegisterComponent,
  LoginComponent,
  AboutComponent,
  SAndKComponent,
  DetailOpenDonasiComponent,
  PaymentComponent, 
  AccountComponent,
  PagenotfoundComponent
]
