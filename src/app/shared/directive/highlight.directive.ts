import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

@HostBinding('style.color') color!: string;
@Input() defaultColor: string = 'blue';
@Input() highlightColor: string = 'red';

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    // this.color = 'blue';
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    // this.color = 'black';
    this.color = this.defaultColor;
  }
}
