import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SriLankaMapComponent} from './sri-lanka-map/sri-lanka-map.component';

const routes: Routes = [
  {path: '', component: SriLankaMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
