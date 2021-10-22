import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  userdata: any;
  constructor(private user: UserService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.user.idx;
    this.user.getUser(id).subscribe(res => {
      this.userdata = res;
  })
  }
}
