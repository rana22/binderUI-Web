import { Injectable } from '@angular/core';
import  { Http, Headers, Response } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getAllDocuments(){
  	return this.http.get("http://localhost:8090/users/document/getAllDoc")
  	.map((response: Response) => response.json());			
  }

}
