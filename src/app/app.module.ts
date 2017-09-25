import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {InfomationComponent} from 'app/infomation/infomation.component';
import {SearchComponent} from './search/search.component';
import {FormComponent} from 'app/form/form.component';
import { DateService } from './search/date.service';

import {CustomRouteReuseStrategy} from 'app/route-reuse.strategy';

const routes: Routes = [
      {path: 'infomation', component: InfomationComponent},
      {path: 'search', component: SearchComponent},
      {path: 'form', component: FormComponent},
];

@NgModule({
  declarations: [AppComponent, InfomationComponent, FormComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [
    DateService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
