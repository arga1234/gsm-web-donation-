import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MyServicesService } from './myServices.service'
import { StoreModule } from '@ngrx/store';
import  {updateDetail} from './reducers/list-open-donation.reducer'
import { addCoinReducer } from './reducers/blockchain.reducer';
import { CarouselModule } from 'ngx-owl-carousel-o';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
   ],
  imports: [
    StoreModule.forRoot({detailDonasi: updateDetail, blockchain: addCoinReducer}),
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserAnimationsModule, 
    PerfectScrollbarModule, 
    CarouselModule
  ],
  providers: [
    MyServicesService, 
    { provide: NZ_I18N, useValue: en_US }, 
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
