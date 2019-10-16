import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../main/home/home.component';
import { NotificationComponent } from '../main/notification/notification.component';
import { AjaxWaitComponent } from './ajax-wait';
import { MenuComponent } from '../main/menu/menu.component';
import { PageNotFoundComponent } from '../main/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, NotificationComponent, AjaxWaitComponent, MenuComponent, PageNotFoundComponent],
  exports: [HomeComponent, NotificationComponent, AjaxWaitComponent, MenuComponent, PageNotFoundComponent],
  imports: [
    CommonModule, RouterModule.forChild([]),
  ]
})
export class MainModule {
  constructor(@Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule) has already been loaded.
      Import MainModule) once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
