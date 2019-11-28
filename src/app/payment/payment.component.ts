import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-payment',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  panels = [
    {
      active: false,
      disabled: false,
      name: 'This is panel header 1',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  copy(){
    alert("You Copied")
  }

}
