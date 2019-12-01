import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-inbox',
  templateUrl: './list-inbox.component.html',
  styleUrls: ['./list-inbox.component.css']
})
export class ListInboxComponent implements OnInit {
  inboxOpen = false
  inboxTitle = ''
  date = ''
  descriptionHtml = ''
  inbox = [{kabar: 'Kabar Gembira', date:'12/12/2019', read:false,  description : 'This is description, maybe this description can get too long, so it must need to resizer', descriptionHtml : "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p><p>Cek This link : <a href='kitabisa.com'>kitabisa.com</a></p>"}, 
  {kabar: 'Seruan Donasi', date:'11/12/2019', read:false, description : 'This is description, maybe this description can get too long, so it must need to resizer', descriptionHtml : "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p><p>Cek This link : <a href='kitabisa.com'>kitabisa.com</a></p>"}, 
  {kabar: 'Kabar Duka', date:'10/12/2019', read:true, description : 'This is description, maybe this description can get too long, so it must need to resizer', descriptionHtml : "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p><p>Cek This link : <a href='kitabisa.com'>kitabisa.com</a></p>"}
  ]
  constructor() { }
  backToList(){
    this.inboxOpen = false
  }

  openInbox(x){
    this.inboxOpen = true
    this.inboxTitle = x.kabar
    this.descriptionHtml =x.descriptionHtml
    this.date = x.date
  }

  ngOnInit() {
  }

}
