import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
  userdata: any;

  constructor(
     private user: UserService,
     private route: ActivatedRoute)  { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.user.getUser(id).subscribe((res) => {
      this.userdata = res;
    });
    // for child route data.
    //  this.userdata = this.route.snapshot.data['user'];
    this.user.getId(id);
  }
}
