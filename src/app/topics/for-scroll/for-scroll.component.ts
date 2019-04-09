import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-scroll',
  templateUrl: './for-scroll.component.html',
  styleUrls: ['./for-scroll.component.css']
})
export class ForScrollComponent implements OnInit {

  sections = ['section1', 'section2', 'section3', 'section4' ];
  currentSection = this.sections[0];

  constructor() { }

  ngOnInit() { }

  onSectionChange(sectionId: string) {
    console.log('onSectionChange', sectionId)
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

}
