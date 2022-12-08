import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {



  searchValue: any = {}

  title = ""

  constructor(private api: ApiService) {
    api.viewValue().subscribe(
      (response:any)=>{
        this.searchValue=response;
      }
    )
   }

  readValues = () => {
    let data: any = {
      "title": this.title
    }
    console.log(data)
    this.api.searchBook(data).subscribe(
      (generated: any) => {
        if (generated.length == 0) {
          alert("Invalid product name!")
        }
        else {
          this.searchValue = generated
        }
      }
    )

  }
}
