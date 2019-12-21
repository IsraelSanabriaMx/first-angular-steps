import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color: string;

  constructor(private readonly elementRef: ElementRef) {
    console.log('Directive Called');
  }

  @HostListener('mouseenter') mouseOn() {
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') mouseOff() {
    this.changeColor(null);
  }

  private changeColor(color = 'yellow') {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
