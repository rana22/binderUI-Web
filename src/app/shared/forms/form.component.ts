import { Component, OnInit } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import  'rxjs/Rx';
import  {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  file: File;

  public FormBuilder: FormBuilder;

  onSubmit(value){
    value.file =this.file;

    let formData : FormData  = new FormData();
    formData.append('file', this.file, this.file.name);
    formData.append('title' , value.name);
    formData.append('category' , value.category);
    formData.append('description', value.description)

  	this.http.post('http://localhost:8090/users/document/saveDocument', formData)
  	.subscribe(
  		res=>console.log(res)
  		)
  }

  fileChange(event){
  	let fileList : FileList = event.target.files;
  	if(fileList.length>0){
  		this.file= fileList[0];
  	}
  }

  ngOnInit() {
  }

}
