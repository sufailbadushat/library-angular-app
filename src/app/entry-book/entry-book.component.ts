import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry-book',
  templateUrl: './entry-book.component.html',
  styleUrls: ['./entry-book.component.css']
})
export class EntryBookComponent {

  constructor(private api: ApiService) { }

  title = ""
  author = ""
  description = ""
  publisher = ""
  language = ""
  distributor = ""
  releasedYear = ""
  price = ""
  image = ""

  readValues = () => {
    let data: any = {

      "title": this.title,
      "author": this.author,
      "description": this.description,
      "publisher": this.publisher,
      "language": this.language,
      "distributor": this.distributor,
      "releasedYear": this.releasedYear,
      "price": this.price,
      'image': this.image

    }
    console.log(data);
    this.api.addValue(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == "success") {
          alert("Book added successfully!");
          this.title = ""
          this.author = ""
          this.description = ""
          this.publisher = ""
          this.language = ""
          this.distributor = ""
          this.releasedYear = ""
          this.price = ""
          this.image = ""

        } else {
          alert("Something went Wrong!");

        }
      }
    )

  }
}
