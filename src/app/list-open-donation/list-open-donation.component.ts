import { Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationStart } from '@angular/router';
import { MyServicesService } from '../myServices.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Detail } from './list-open-donation.model';
import { AppState } from './../app.state';



@Component({
  selector: 'app-list-open-donation',
  templateUrl: './list-open-donation.component.html',
  styleUrls: ['./list-open-donation.component.css']
})

export class ListOpenDonationComponent implements OnInit {
  button = false
  loading = false
  getData = true
  data = [];
  datas: any;
  navStart: Observable<NavigationStart>;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
   if((pos == max || pos > (max - 1)) && this.getData == true) {
    this.getData = false
    this.loading = true
     setTimeout(()=>{ 
      var newData = [
        {title : "Bantu Mas Endrik Lolos Seleksi CPNS", image : "assets/img/1.png", owner : "Endang Riani", collected : 2000000, progress : 40, dayLeft : 20}, 
        {title : "Bantu Rini Untuk Kembali Sekolah", image : "assets/img/2.png", owner : "Arga Wirawan", collected : 1000000, progress : 30, dayLeft : 15},
        {title : "Bantu Bapak Ridwan Membangun Masjid", image : "assets/img/3.jpg", owner : "Ridwan Kamil", collected : 3000000, progress : 50, dayLeft : 10 }, 
      ];
      newData.map(data=>{
        this.data.push(data)
      })
      this.loading = false;
      this.button = false
      this.getData = true
     }, 5000);
   }
  }

  // Inject module router services ke constructor
  constructor(private router: Router, private _myserviceService : MyServicesService, private store : Store<AppState>) { 
  //  observable on router
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  goToDetail(data){
    this.store.dispatch({
      type : 'UPDATE_DETAIL', 
      payload : <Detail> data
    })
    this.router.navigateByUrl('/detaildonasi');
  }

  changeData() {
    // mengemit function yang ada di service
    this._myserviceService.changeData({name: 'Eric Cantona'});
  }

  ngOnInit() {
    
    this.data = this._myserviceService.getListDonasi()
    // Mensubsribe observable yang ada di service kemudian memasukannya ke dalam datas
    this._myserviceService.currentData.subscribe(data => this.datas = data);

    // Mengubah data observable
    this.changeData()

    // Mensubscribe kembali observable dengan data yang sudah diubah 
    this._myserviceService.currentData.subscribe(data => this.datas = data);
    
    // observable on router
    this.navStart.subscribe(evt => console.log('Navigation Started!'));
  }
  
  // RxJs and Service tutorial : https://www.djamware.com/post/5da31946ae418d042e1aef1d/angular-8-tutorial-observable-and-rxjs-examples#preparation

}

