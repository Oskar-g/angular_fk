import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola mundo';

  // constructor(notify: NotificationService) {
  //   notify.add('Esto es una notificación');
  //   notify.remove(0);
  //   notify.add(null);
  //   notify.remove(0);
  // }
  // constructor(out: LoggerService) {
  //   out.error('Es un error');
  //   out.warn('Es un warn');
  //   out.info('Es un info');
  //   out.log('Es un log');
  // }

  ngOnInit() {
  }

}
