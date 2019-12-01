import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donasi-saya',
  templateUrl: './donasi-saya.component.html',
  styleUrls: ['./donasi-saya.component.css']
})
export class DonasiSayaComponent implements OnInit {
  isVisible = false;
  detailModalBox = {}
  // donasiSaya = []
  authenticated = true
  donasiSaya = [{
    title : 'This Is Title', 
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6INshAGvHmVCXnrXEYlOe_BUQHWwN_Zp0Fdb1uxH7AccY2VeD', 
    donasi : '100.000', 
    detail : {
      title : 'This is tile', 
      owner : 'This is owner', 
      collected : '100.000', 
      dayLeft : 20, 
      progress : 50,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6INshAGvHmVCXnrXEYlOe_BUQHWwN_Zp0Fdb1uxH7AccY2VeD', 
      donasiSaya : '30.000', 
      date : '12-12-2018', 
      metode : 'Transfer Bank Mandiri' 
    }
  }, 
  {
    title : 'This Is Title', 
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtnn47tdXKiCh7lQZsbiC4CQeIWsJX1SXjdViZ9V2qZE1Gv_Kw', 
    donasi : '100.000', 
    detail : {
      title : 'This is tile', 
      owner : 'This is owner', 
      collected : '100.000', 
      dayLeft : 20, 
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtnn47tdXKiCh7lQZsbiC4CQeIWsJX1SXjdViZ9V2qZE1Gv_Kw', 
      progress : 50 , 
      donasiSaya : '30.000', 
      date : '12-12-2018', 
      metode : 'Transfer Bank Mandiri' 
    }
  }, 
  {
    title : 'This Is Title', 
    image : 'https://data.whicdn.com/images/328892136/original.jpg', 
    donasi : '30.000', 
    detail : {
      title : 'This is tile', 
      owner : 'This is owner', 
      collected : '100.000', 
      image : 'https://data.whicdn.com/images/328892136/original.jpg', 
      dayLeft : 20, 
      progress : 50, 
      donasiSaya : '30.000', 
      date : '12-12-2018', 
      metode : 'Transfer Bank Mandiri' 
    }
  }]
  showModal(): void {

    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  constructor() { }

  ngOnInit() {
  }
  showDetail(x){
    this.detailModalBox = x
    this.isVisible = true
  }
}
