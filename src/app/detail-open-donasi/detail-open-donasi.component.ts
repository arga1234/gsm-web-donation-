import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-open-donasi',
  animations: [
    trigger('openClose', [
      // ...
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
  ],
  templateUrl: './detail-open-donasi.component.html',
  styleUrls: ['./detail-open-donasi.component.css'], 
})
export class DetailOpenDonasiComponent implements OnInit {
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
    {name : "Mandiri Virtual Account", img : "https://assets.kitabisa.cc/images/banks/mandiri.png"}
  ]
  jumlahDonasi = ''
  disabled = true
  isOpen = false;
  nama=''
  email = ''
  comment = ''
  radioValue = 'GO-PAY';
  anonim = false
  showComment = false
  loading = false;

  submitFormDonasi(){
  }

  donasiSekarang(){
    this.loading = true
    setTimeout(()=>{ 
      this.isOpen = true
      this.loading = false
    }, 2000); 
  }

  constructor(
    ) { }

  ngOnInit() {
    this.panels[1].name = 'Pendonasi (' + this.panels[1].data.length + ')' 

  }

}
