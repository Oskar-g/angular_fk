import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ERROR_LEVEL, LoggerService, MpCoreModule } from 'src/mp-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CommonAppModule } from './common-app/common-app.module';
import { DemosComponent } from './demos/demos.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { HomeComponent } from './home/home.component';
import { MainModule } from './main/main.module';
import { NotificationComponent } from './notification/notification.component';
import { PersonasFormComponent } from './personas-form/personas-form.component';
import { PersonasModule } from './personas/modulo.module';
import { AjaxWaitInterceptor } from './main/ajax-wait';

registerLocaleData(localeEs, 'es', localeEsExtra);



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    DinamicoComponent,
    CalculadoraComponent,
    PersonasFormComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MainModule, CommonAppModule, MpCoreModule,
    AppRoutingModule, PersonasModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
