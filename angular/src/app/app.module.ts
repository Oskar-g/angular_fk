import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerService, MpCoreModule } from 'src/mp-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonAppModule } from './common-app/common-app.module';
import { MainModule } from './main/main.module';
import { ERROR_LEVEL } from 'src/mp-core/services/logger.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    CommonAppModule,
    MpCoreModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
