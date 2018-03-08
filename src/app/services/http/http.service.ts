import { Injectable } from '@angular/core';
import  { Http, Headers, Response } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getAllDocuments(){
  	return this.http.get("http://localhost:8090/users/document/getAllDoc")
  	.map((response: Response) => response.json());			
  }

  getDocumentsByQuery(query : String){
    let url : string = 'http://localhost:8090/users/document/query/getDocuments?query=' + query;
    return this.http.get(url)
    .map((response: Response) => response.json());
  }

}
