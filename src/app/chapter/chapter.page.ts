import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage {

  constructor(private router: Router) {}


  clickToIntroduction(){
    this.router.navigate(['/tabs/introduction']);
  }

  clickToSentence(){
    this.router.navigate(['/tabs/sentence']);
  }
  clickToVocabulary(){
    this.router.navigate(['/tabs/vocabulary']);
  }
  clickToVideo(){
    this.router.navigate(['/tabs/video']);
  }

}
