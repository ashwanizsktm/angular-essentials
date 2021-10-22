import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
    <p>Counter Works !</p>
  `,
  styles:[]
})

export class CounterComponent implements OnInit{

  public counter = 0;

  ngOnInit(): void{
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
