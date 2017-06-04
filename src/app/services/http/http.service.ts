import { Injectable } from '@angular/core';
import  { Http, Headers, Response } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getAllDocuments(){
  	return this.http.get("/getAllDoc")
  	.map((response: Response) => response.json());			
  }

}
