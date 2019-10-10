import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { inject } from '@angular/core/testing';

export const ERROR_LEVEL = new InjectionToken<number>('ERROR_LEVEL');

@Injectable(
  //  {providedIn: 'root'}
)
export class LoggerService {

  private level: number = 5;

  constructor(@Optional() @Inject(ERROR_LEVEL) level: number) {
    if (level != null) {
      this.level = level;
    }
  }

  public error(msg: string): void {
    if (this.level < 1) { return; }
    console.error(msg);
  }

  public warn(msg: string): void {
    if (this.level < 2) { return; }
    console.warn(msg);
  }

  public info(msg: string): void {
    if (this.level < 3) { return; }
    // tslint:disable-next-line: no-console
    if (console.info) {
      // tslint:disable-next-line: no-console
      return console.info(msg);
    }
    this.log(msg);
  }

  public debug(msg: string): void {
    if (this.level < 4) { return; }
    // tslint:disable-next-line: no-console
    if (console.debug) {
      // tslint:disable-next-line: no-console
      return console.debug(msg);
    }
    this.log(msg);
  }

  public log(msg: string): void {
    if (this.level < 5) { return; }
    console.log(msg);
  }

}
