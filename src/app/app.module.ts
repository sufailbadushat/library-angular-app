import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { EntryBookComponent } from './entry-book/entry-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { RouterModule, Routes } from '@angular/router';


const myRout:Routes=
[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userRegister",
    component:UserRegisterComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  },
  {
    path:"add",
    component:EntryBookComponent
  },
  {
    path:"edit",
    component:EditBookComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"issue",
    component:IssueBookComponent
  },
  {
    path:"view",
    component:ViewBookComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    EntryBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    IssueBookComponent,
    SearchBookComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
