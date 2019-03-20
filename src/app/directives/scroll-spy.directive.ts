// https://stackblitz.com/edit/angular-scroll-spy?file=app%2Fscroll-spy.directive.ts

import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private elementRef: ElementRef) {}

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
      const sections = ['section1', 'section2', 'section3', 'section4' ]
      let currentSection: string;
      const currentElement: HTMLElement = this.elementRef.nativeElement;
      // const children: HTMLElement[] = this.elementRef.nativeElement.children;
      const children = currentElement.children;
      // console.log('spiedTags', this.spiedTags)
      const scrollTop: number = event.target.scrollTop;
      // console.log('scrollTop', scrollTop)
      const parentOffset = event.target.offsetTop;
      // console.log('event.target', event.target)
      // for (let i = 0; i < children.length; i++) {
      Array.prototype.forEach.call(children, (item, i) => {
        const element = children[i] as HTMLElement;
        // console.log('element', element)
        if (sections.find(spiedTag => spiedTag === element.id)) {
          // console.log('element.offsetTop', element.offsetTop)
          // console.log('element.scrollHeight', element.scrollHeight)
          // console.log('element.scrollTop', element.scrollTop)
          // console.log('element.clientHeight', element.clientHeight)
          // console.log('window.pageYOffset', window.pageYOffset)
          // console.log('parentOffset', parentOffset)
          // console.log('scrollTop', scrollTop)
          // if ((element.offsetTop - parentOffset) <= scrollTop) {
          //     currentSection = element.id;
          // }
          if (window.pageYOffset >= element.offsetTop && window.pageYOffset < (element.offsetTop + element.scrollHeight)) {
            // console.log('this element is in view')
              currentSection = element.id;
              console.log('currentSection 1', currentSection)
          }
          // console.log('----------------------------')
        }
      });

      if (currentSection !== this.currentSection) {
        this.currentSection = currentSection;
        this.sectionChange.emit(this.currentSection);
      }
    }

}

