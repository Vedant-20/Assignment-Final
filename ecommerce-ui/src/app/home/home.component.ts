import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suggestedProducts:SuggestedProduct[]=[
    {
      bannerimage:'Banner/Banner_Mobile.jpg',
      category:{
        id:0,
        category:'electronics',
        subCategory:'mobiles',
      },
    },
    {
      bannerimage:'Banner/Banner_Home.avif',
      category:{
        id:0,
        category:'electronics',
        subCategory:'laptops',
      },
    },
    {
      bannerimage:'Banner/Banner_Home1.jpg',
      category:{
        id:0,
        category:'furniture',
        subCategory:'chairs',
      },
    },
  ];

  constructor(){}
  ngOnInit(): void {
      
  }

}
