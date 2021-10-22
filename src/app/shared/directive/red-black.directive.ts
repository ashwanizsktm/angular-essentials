import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style="color:#fff; background-color:red";
  }

}
