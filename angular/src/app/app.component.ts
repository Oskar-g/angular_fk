import { Component } from '@angular/core';
import { LoggerService } from 'src/mp-core';
import { NotificationService } from './common-app/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  /*
  constructor(out: LoggerService) {
    out.error('This is an error');
    out.warn('This is a warn');
    out.info('This is an info');
    out.debug('This is an debug');
    out.log('This is a log');
  }
   */

   constructor(notify: NotificationService){
     notify.add('This is a notification');
     notify.delete(0);
     notify.add('');
     notify.clear();
   }


}
