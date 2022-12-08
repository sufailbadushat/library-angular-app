import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {

  constructor(private api:ApiService){
    api.viewValue().subscribe(
      (response:any)=>{
        this.books=response;
      }
    )
  }
  books:any=[  ]
}
