import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/crudservice/product.service';
import { User } from './user.modal';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {



  url = 'https://crudapp-3851d-default-rtdb.firebaseio.com/user.json';

  users: User[] = [];

  @ViewChild('userForm') userForm!: NgForm;

  editMode: boolean = false;
  editIndex!: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.onFetchUser();
  }

  onAddUser(userData: User) {
    if(this.userForm.valid) {
      if (this.editMode) {
        this.http.put<User>('https://crudapp-3851d-default-rtdb.firebaseio.com/user/'+this.editIndex+'.json',
         userData).subscribe(res => {
          this.onFetchUser();
        });
      } else {
        this.users.push(userData);
        this.http.post<User>(this.url, userData).subscribe(res => {
          console.log(res);
        });
      }
    } else {
      let key = Object.keys(this.userForm.controls);
      key.filter(data => {
        let control = this.userForm.controls[data];
        if(control.errors !=null) {
          control.markAsTouched();
        }
      })
    }
  }

  onFetchUser() {
    this.http.get<User>(this.url).pipe(
      map(( (resData: any) => {
        const userArray = [];
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            userArray.push({userId: key, ...resData[key]});
          }
        }
      return userArray;
      }))
    ).subscribe(res => {
      this.users = res;
    });
  }

  onEditUser(userId: string, index:number) {
    this.editMode = true;
    this.editIndex = userId
     this.userForm.setValue({
       name:this.users[index].name,
       technology: this.users[index].technology
     })
  }

  onDeleteUser(userId: any){
    if(confirm('Do you want to delete the users?')){
      this.http.delete('https://crudapp-3851d-default-rtdb.firebaseio.com/user/'+userId+'.json').subscribe(res => {
        this.onFetchUser();
      })
    }

  }
}
