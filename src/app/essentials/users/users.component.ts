import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
   errorMsg = "loading ...";
  constructor(private user: UserService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    // this.user.getAllusers().subscribe(res => {
    //   this.users = res;
    // })
    this.users = this.route.snapshot.data['data'];
  }
}
