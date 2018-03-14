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
  				c => this.imageArray.push({image: 'data:image/png;base64,'+c.thumbnail, name: c.title, category: c.category})
  				// c=>console.log(c))
  				)
  		)
  }

  getQuery($event){
		this.imageArray = [];
    this.httpService.getDocumentsByQuery($event)
  	.subscribe(
  			response => response.forEach(
  				c => this.imageArray.push({image: 'data:image/png;base64,'+c.thumbnail, name: c.title, category: c.category})
  				// c=>console.log(c))
  				)
  		)

  }

}
