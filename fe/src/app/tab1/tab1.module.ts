import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PostsListComponent } from './posts-list/posts-list.component';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: Tab1Page}]),
    EffectsModule.forFeature([PostsEffects]),
  ],
  declarations: [
    Tab1Page,
    PostsListComponent,
  ]
})
export class Tab1PageModule {
}
