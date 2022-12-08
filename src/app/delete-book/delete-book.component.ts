import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
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
  deleteBtnClick = (id: any) => {

    let data: any = { "id": id }
    this.api.deleteBook(data).subscribe(
      (genrated: any)=>{
        console.log(genrated)
        if (genrated.status == "success") {
          alert("Book deleted successfully!");
          this.title = ""
          this.searchValue = []
        } else {
          alert("something went wrong!");
        }
      }
    )
  }
}
