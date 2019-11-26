import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-open-donation',
  templateUrl: './list-open-donation.component.html',
  styleUrls: ['./list-open-donation.component.css']
})

export class ListOpenDonationComponent implements OnInit {
  button = false
  loading = false
  getData = true
  data = [
    {title : "Bantu Mas Endrik Lolos Seleksi CPNS", image : "assets/img/1.png", owner : "Endang Riani", collected : 2000000, progress : 40, dayLeft : 20}, 
    {title : "Bantu Rini Untuk Kembali Sekolah", image : "assets/img/2.png", owner : "Arga Wirawan", collected : 1000000, progress : 30, dayLeft : 15},
    {title : "Bantu Bapak Ridwan Membangun Masjid", image : "assets/img/3.jpg", owner : "Ridwan Kamil", collected : 3000000, progress : 50, dayLeft : 10 }, 
  ];

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
   if((pos == max || pos > (max - 1)) && this.getData == true) {
     console.log("Hai")
    this.getData = false
    this.loading = true
     setTimeout(()=>{ 
       console.log("Hello")
      // newData adalah data baru yang didapat dari API
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

  constructor(private router: Router) { 
    
  }

  goToDetail(){
    console.log("hELLO")
    this.router.navigateByUrl('/detaildonasi');
  }

  ngOnInit() {
    
    
  }
  

}

