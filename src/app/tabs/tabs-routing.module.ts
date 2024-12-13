import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'chapter',
        loadChildren: () => import('../chapter/chapter.module').then( m => m.ChapterPageModule)
      },
      {
        path: 'introduction',
        loadChildren: () => import('../introduction/introduction.module').then( m => m.IntroductionPageModule)
      },
      {
        path: 'vocabulary',
        loadChildren: () => import('../vocabulary/vocabulary.module').then( m => m.VocabularyPageModule)
      },
      {
        path: 'sentence',
        loadChildren: () => import('../sentence/sentence.module').then( m => m.SentencePageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('../video/video.module').then( m => m.VideoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
