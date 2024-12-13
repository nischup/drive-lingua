import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.page.html',
  styleUrls: ['./sentence.page.scss'],
})
export class SentencePage implements OnInit {

  selectedPart: string = 'part1';
  
  constructor() { }

  ngOnInit() {
  }

  onSegmentChange(event: any) {
    console.log('Selected Part:', event.detail.value);
    this.selectedPart = event.detail.value;
  }

}
