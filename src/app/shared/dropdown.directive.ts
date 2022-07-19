import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click') onClick() {
    let classes : DOMTokenList=this.el.nativeElement.children[1].classList;
    classes.contains("show")?
    this.el.nativeElement.children[1].classList.remove("show"):
    this.el.nativeElement.children[1].classList.add("show");
  }
}
