import { BrowserModule }                                            from '@angular/platform-browser';
import { NgModule }                                                 from '@angular/core';
import { FormsModule }                                              from '@angular/forms';
import { HttpClientModule, HttpClient}                              from '@angular/common/http';
import { HttpService }                                              from './services/http/http.service';
import { AppComponent }                                             from './app.component';
import { HeaderComponent }                                          from './header/header.component';
import { FooterComponent }                                          from './footer/footer.component';
import { HomeComponent }                                            from './home/home.component';
import { RoutesModule }                                             from './services/routes/routes.module';
import { FormComponent }                                            from './shared/forms/form.component';
import { FilterPipe }                                               from './services/utilities/filter.pipe';
import { NgxPaginationModule }                                      from 'ngx-pagination';
import { SidebarComponent }                                         from './shared/sidebar/sidebar.component';
import { NgbModule }                                                from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent }                                      from './shared/date-picker/date-picker.component';
import { CategoryPipe }                                             from './services/filters/category.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    SidebarComponent,
    FilterPipe,
    DatePickerComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutesModule,
    NgxPaginationModule,
    NgbModule.forRoot()
  ],
  providers: [ HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
