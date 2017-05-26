import { Component, OnInit } from '@angular/core';
import { MdListModule, MdGridListModule } from '@angular/material';
import { Http } from '@angular/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	arrSize = 5;
	shopData: Array<any>;

  constructor(private http: Http) { 

  }

  ngOnInit() {
  	this.http.get('https://jsonplaceholder.typicode.com/photos').map(res => res.json())
  		.subscribe(res => this.shopData = res);
  	
  }

  delItem(index) : void {
  	this.shopData.splice(index,1);

  }

  showInfo(index) : void {
  	console.log(this.shopData[index].title);
  }

}
