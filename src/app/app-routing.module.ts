import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './body/dashboard/dashboard.component';
import {NewsComponent} from './body/news/news.component';
import {SuccessInfoComponent} from './body/success-info/success-info.component';
import {AppComponent} from './app.component';
import {MainComponent} from './body/main/main.component';
import {OsArchitectureComponent} from './body/os-architecture/os-architecture.component';
import {InformaticsComponent} from './body/informatics/informatics.component';
import {DatabasesComponent} from './body/databases/databases.component';
import {ProgrammingComponent} from './body/programming/programming.component';
import {LiteratureComponent} from './body/literature/literature.component';
import {FirstGroupComponent} from './body/groups/first-group/first-group.component';
import {SecondGroupComponent} from './body/groups/second-group/second-group.component';
import {ThirdGroupComponent} from './body/groups/third-group/third-group.component';
import {FourthGroupComponent} from './body/groups/fourth-group/fourth-group.component';


const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'success-info',
        component: SuccessInfoComponent
      },
      {
        path: 'os-architecture',
        component: OsArchitectureComponent
      },
      {
        path: 'informatics',
        component: InformaticsComponent
      },
      {
        path: 'databases',
        component: DatabasesComponent
      },
      {
        path: 'programming',
        component: ProgrammingComponent
      },
      {
        path: 'literature',
        component: LiteratureComponent
      },
      {
        path: 'k-21',
        component: FirstGroupComponent
      },
      {
        path: 'k-22',
        component: SecondGroupComponent
      },
      {
        path: 'k-23',
        component: ThirdGroupComponent
      },
      {
        path: 'k-24',
        component: FourthGroupComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
