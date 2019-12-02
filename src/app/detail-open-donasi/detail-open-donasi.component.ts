import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { NzMessageService } from 'ng-zorro-antd/message';
// observable on router
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Detail } from './../list-open-donation/list-open-donation.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-detail-open-donasi',
  animations: [
    trigger('openClose', [
      state('open', style({
        minHeight: '200px',
        opacity: 1,
        backgroundColor: '#f7f7f7'
      })),
      state('closed', style({
        height: '0px',
        opacity: 1,
        backgroundColor: 'white'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
    trigger('openForm', [
      state('open', style({
        minHeight: '200px',
        opacity: 1,
        backgroundColor: '#fff'
      })),
      state('closed', style({
        height: '0px',
        opacity: 1,
        backgroundColor: 'white'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
  templateUrl: './detail-open-donasi.component.html',
  styleUrls: ['./detail-open-donasi.component.css'], 
})
export class DetailOpenDonasiComponent implements OnInit {
  detailStore: Observable<Detail>
  panels = [
    {
      active: true,
      disabled: false,
      type : 'story', 
      description : 'Saya hanya satu dari sekian banyak kisah pengabdian para guru di pelosok negeri ini. Jika bukan karena semangat mengajar dan mendidik dengan ketulusan, barangkali sudah lama saya tinggalkan sekolah ini. Tapi saya tidak memilih jalan itu sebab keyakinan saya bahwa setiap orang memiliki rezekinya masing-masing.', 
      name: 'Deskripsi/Cerita'
    },
    {
      active: false,
      disabled: true,
      type : 'donatur', 
      name: 'Pendonasi', 
      data : [
        {name : "Arga Wirawan", ava : "assets/img/person-male.png", comment : "Semoga bermanfaat" },
        {name : "Ridwan Kamil", ava : "assets/img/person-male.png", comment : "Semoga membantu" },
        {name : "Kemal Sanjaya", ava : "assets/img/person-male.png", comment : "Semoga lekas selesai masalahnya" }
      ]
    }
  ];
  payment = [
    {name : "G0-PAY", img : "https://assets.kitabisa.cc/images/banks/gopay.png"}, 
    {name : "Jenius Pay", img : "https://assets.kitabisa.cc/images/banks/jenius-pay.png"}, 
    {name : "Link Aja", img : "https://assets.kitabisa.cc/images/banks/linkaja.png"}, 
    {name : "Mandiri Virtual Account", img : "https://assets.kitabisa.cc/images/banks/mandiri.png"}, 
    {name : "Transfer Mandiri", img : "https://assets.kitabisa.cc/images/banks/mandiri.png"}, 
    {name : "BCA Virtual Account", img : "https://assets.kitabisa.cc/images/banks/bca.png"}, 
    {name : "Transfer BCA", img : "https://assets.kitabisa.cc/images/banks/bca.png"}, 
    {name : "Transfer BNI", img : "https://assets.kitabisa.cc/images/banks/bni.png"}, 
    {name : "Transfer BRI", img : "https://assets.kitabisa.cc/images/banks/bri.png"}, 
    {name : "Credit Card", img : "https://assets.kitabisa.cc/images/banks/visa-mastercard.png"}, 

  ]
  jumlahDonasi = ''
  disabled = true
  isOpen = false;
  isOpen2 = false; 
  name=''
  email = ''
  comment = ''
  radioValue = '';
  anonim = false
  showComment = false
  loading = false;

  submitFormDonasi(){
  }

  donasiSekarang(){
    console.log(this.detailStore)
    this.loading = true
    setTimeout(()=>{ 
      this.isOpen = true
      this.loading = false
      setTimeout(()=>{ 
        this.isOpen2 = true
      }, 1000);
    }, 2000); 
  }

  donasiSekarang2(){
    this.loading = true
    setTimeout(()=>{ 
      this.loading = false
      if(this.name.length != 0 && this.email.length != 0 && this.jumlahDonasi.length > 4 && this.radioValue.length !=0){
        this.router.navigateByUrl('/payment');
      }else{
        this.createMessage('error')
      }
    }, 2000); 
  }

  createMessage(type: string): void {
    // this.message.create(type, `This is a message of ${type}`);
    this.message.create(type, 'Nama, email, jumlah donasi dan metode pembyaran tidak boleh kosong');
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private message: NzMessageService, private store : Store<AppState>) { 
    this.detailStore = this.store.select(state => state.detailDonasi)
  }

  ngOnInit() {
    this.panels[1].name = 'Pendonasi (' + this.panels[1].data.length + ')' 
    // observable on router
    this.activatedRoute.url.subscribe(url => console.log('The URL changed to: ' + url));
    // RxJs and Service tutorial : https://www.djamware.com/post/5da31946ae418d042e1aef1d/angular-8-tutorial-observable-and-rxjs-examples#preparation
  }

}
