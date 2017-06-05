import { Component, OnInit } from '@angular/core';
import  { Http, Headers } from '@angular/http';
import  'rxjs/Rx';
import  {HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	response: any;
  searchQuery: string ='';
  query: string ='';

	imageArray : Array<any> = [];

  constructor(private http : Http, private httpService: HttpService) { }

  ngOnInit() {

  	this.httpService.getAllDocuments()
  	.subscribe(
  			response => response.forEach(
  				c => this.imageArray.push({image: 'data:image/png;base64,'+c.image, name: c.docName})
  				// c=>console.log(c))
  				)
  		)
  }

  getQuery(){
    console.log(this.query);
    this.searchQuery = this.query;
  }


}
