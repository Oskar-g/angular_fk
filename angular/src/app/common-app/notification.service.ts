import { Injectable } from '@angular/core';
import { LoggerService } from 'src/mp-core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private list: Array<string> = [];

  constructor(private out: LoggerService) { }

  public get List(): Array<string> { return Object.assign([], this.list); }

  public add(msg: string): void {
    if (!msg) { return this.out.error('No notification message'); }
    this.list.push(msg);
    this.out.warn(`NOTIFICATION:', ${msg}`);
  }

  public delete(index: number): void {
    if (index > 0 && index < this.list.length) {
      this.list.splice(index, 1);
    } else {
      this.out.error('Index out of range');
    }
  }

  public clear(): void {
    if (this.haveNotifications) {
      this.list.splice(0);
    }
  }

  public get haveNotifications(): boolean { return this.list.length > 0; }
}
