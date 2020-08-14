import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './body/dashboard/dashboard.component';
import {DisciplinesComponent} from './body/disciplines/disciplines.component';
import {NewsComponent} from './body/news/news.component';
import {SuccessInfoComponent} from './body/success-info/success-info.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'disciplines',
        component: DisciplinesComponent
      },
      {
        path: 'success-info',
        component: SuccessInfoComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
