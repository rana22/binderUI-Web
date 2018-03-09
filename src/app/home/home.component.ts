import { Component, OnInit } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import  'rxjs/Rx';
import  {HttpService } from '../services/http/http.service';
import { map, filter, mergeMap, tap } from 'rxjs/operators';


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

  constructor(private http : HttpClient, private httpService: HttpService) { }

  ngOnInit() {

  	this.httpService.getAllDocuments()
  	.subscribe(
  			response => response.forEach(
  				c => this.imageArray.push({image: 'data:image/png;base64,'+c.thumbnail, name: c.title})
  				// c=>console.log(c))
  				)
  		)
  }

  getQuery(){
    // console.log(this.query);
    this.searchQuery = this.query;

    this.httpService.getDocumentsByQuery(this.searchQuery)
  	.subscribe(
  			response => response.forEach(
  				c => this.imageArray.push({image: 'data:image/png;base64,'+c.thumbnail, name: c.title})
  				// c=>console.log(c))
  				)
  		)

  }

}
