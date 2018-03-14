import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  from : string = "From";
  to : string = "To";
  query: string ='';

  @Output() search : EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  searchQuery(){
    console.log("seach query ", this.query);
    this.search.emit(this.query);
  }

}
