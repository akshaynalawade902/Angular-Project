import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[myHighlight]'
})

export class HighlightDirective{

    constructor(private el : ElementRef){

        //this.el.nativeElement.style.backgroundColor = 'Green';
    }

    Highlight(color){
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter') OnMouseEnter(){
        this.Highlight('Green');
    }
    @HostListener('mouseleave') OnMouseLeave(){
        //this.el.nativeElement.style.backgroundColor = '';
        this.Highlight('');
    }
}