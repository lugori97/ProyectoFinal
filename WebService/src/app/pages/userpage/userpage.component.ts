import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    if (!datos){
      window.location.href="/login";
    }
  }

}








