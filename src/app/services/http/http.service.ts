import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllDocuments(){
  	return this.http.get<any[]>("http://localhost:8090/users/document/getAllDoc");
  	// .map((response: Response) => response.json());			
  }

  getDocumentsByQuery(query : String){
    let url : string = 'http://localhost:8090/users/document/query/getDocuments?query=' + query;
    return this.http.get<any[]>(url);
    // .map((response: Response) => response.json());
  }

}
