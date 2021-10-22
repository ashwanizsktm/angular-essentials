import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-concepts-a',
  templateUrl: './rxjs-concepts-a.component.html',
  styleUrls: ['./rxjs-concepts-a.component.scss']
})
export class RxjsConceptsAComponent implements OnInit {



  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


}
