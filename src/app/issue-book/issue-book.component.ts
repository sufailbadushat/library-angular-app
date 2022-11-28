import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  name=""
  title=""
  dateOfIssue=""
  membershipNumber=""

  readValues=()=>{
    let data:any=
    {
      "name":this.name,
      "title":this.title,
      "dateOfIssue":this.dateOfIssue,
      "membershipNumber":this.membershipNumber
    }
    console.log(data)
  }
}
