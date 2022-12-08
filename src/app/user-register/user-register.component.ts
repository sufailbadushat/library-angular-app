import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private api:ApiService){}

  name = ""
  adharNo = ""
  address = ""
  pinCode = ""
  dateOfBirth = ""
  email = ""
  phoneNo = ""
  username = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let data: any =
    {
      "name": this.name,
      "adharNo": this.adharNo,
      "address": this.address,
      "pinCode": this.pinCode,
      "dateOfBirth": this.dateOfBirth,
      "email": this.email,
      "phoneNo": this.phoneNo,
      "username": this.username,
      "password": this.password,
      "confirmPassword": this.confirmPassword
    }

    console.log(data)
  
  this.api.addUser(data).subscribe(
    (response:any)=>{
      console.log(response);
      if(response.status =="success" && this.password == this.confirmPassword){
        console.log(data);
        alert("Registered successfully! \n\nGoto login page.");
        this.name=""
        this.address=""
        this.adharNo=""
        this.pinCode=""
        this.dateOfBirth=""
        this.email=""
        this.username=""
        this.phoneNo=""
        this.password=""
        this.confirmPassword=""
      }
      else{
        alert("Add same password!");
      }
    }
  )
}

}
