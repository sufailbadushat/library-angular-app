import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

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
  }

}
