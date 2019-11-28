import { Injectable } from '@angular/core';
// Deklarasi module behavior untuk fitur mengubah observable 
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class MyServicesService {
// Membuat behavior menjadi observable
private dataSource = new BehaviorSubject({name: 'Maradona'});
currentData = this.dataSource.asObservable();
constructor() { }

// Fungsi yang diemit dari componen utnuk mengubah data 
changeData(data: any) {
  this.dataSource.next(data);
}

  // RxJs and Service tutorial : https://www.djamware.com/post/5da31946ae418d042e1aef1d/angular-8-tutorial-observable-and-rxjs-examples#preparation


getListDonasi(){
  return [
    {title : "Bantu Mas Endrik Lolos Seleksi CPNS", image : "assets/img/1.png", owner : "Endang Riani", collected : 2000000, progress : 40, dayLeft : 20}, 
    {title : "Bantu Rini Untuk Kembali Sekolah", image : "assets/img/2.png", owner : "Arga Wirawan", collected : 1000000, progress : 30, dayLeft : 15},
    {title : "Bantu Bapak Ridwan Membangun Masjid", image : "assets/img/3.jpg", owner : "Ridwan Kamil", collected : 3000000, progress : 50, dayLeft : 10 }, 
  ]
}

}
