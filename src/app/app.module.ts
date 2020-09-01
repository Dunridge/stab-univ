import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {NewsComponent} from './body/news/news.component';
import {SuccessInfoComponent} from './body/success-info/success-info.component';
import {DashboardComponent} from './body/dashboard/dashboard.component';
import {MainComponent} from './body/main/main.component';
import {OsArchitectureComponent} from './body/os-architecture/os-architecture.component';
import {InformaticsComponent} from './body/informatics/informatics.component';
import {DatabasesComponent} from './body/databases/databases.component';
import {ProgrammingComponent} from './body/programming/programming.component';
import {LiteratureComponent} from './body/literature/literature.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FirstGroupComponent } from './body/groups/first-group/first-group.component';
import { SecondGroupComponent } from './body/groups/second-group/second-group.component';
import { ThirdGroupComponent } from './body/groups/third-group/third-group.component';
import { FourthGroupComponent } from './body/groups/fourth-group/fourth-group.component';
import { FifthGroupComponent } from './body/groups/fifth-group/fifth-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NewsComponent,
    SuccessInfoComponent,
    DashboardComponent,
    MainComponent,
    OsArchitectureComponent,
    InformaticsComponent,
    DatabasesComponent,
    ProgrammingComponent,
    LiteratureComponent,
    FirstGroupComponent,
    SecondGroupComponent,
    ThirdGroupComponent,
    FourthGroupComponent,
    FifthGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
