import { Component, OnInit } from '@angular/core';
import  { Http, Headers } from '@angular/http';
import  'rxjs/Rx';
import  {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private http: Http) { }

  file: File;

  public FormBuilder: FormBuilder;
  public formData1 : FormData;

  onSubmit(value){
  	value.file = this.file;
  	

  	let formData: FormData= new FormData();
  	formData.append('file', this.file, this.file.name);
  	formData.append('name', value.name);
  	formData.append('category', value.category);

    console.log(formData);

  	this.http.post('/saveImg', formData)
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
