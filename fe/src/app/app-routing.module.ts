import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  {path: 'post-details/:postId', loadChildren: './pages/post-details/post-details.module#PostDetailsPageModule'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
