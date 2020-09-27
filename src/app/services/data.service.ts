import {Injectable} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private getChartDataEventSubscription = new Subject<any>();

  sendChartData(data: any): void {
    this.getChartDataEventSubscription.next(data);
  }

  getChartData(): Observable<any> {
    return this.getChartDataEventSubscription.asObservable();
  }

  unsubscribeChartDataEventSubscription(): void {
    this.getChartDataEventSubscription.unsubscribe();
  }

  constructor() {
  }

  updateChartData(): void {
    const data = [
      ['lk-bc', this.getRandomInt()],
      ['lk-mb', this.getRandomInt()],
      ['lk-ja', this.getRandomInt()],
      ['lk-kl', this.getRandomInt()],
      ['lk-ky', this.getRandomInt()],
      ['lk-mt', this.getRandomInt()],
      ['lk-nw', this.getRandomInt()],
      ['lk-ap', this.getRandomInt()],
      ['lk-pr', this.getRandomInt()],
      ['lk-tc', this.getRandomInt()],
      ['lk-ad', this.getRandomInt()],
      ['lk-va', this.getRandomInt()],
      ['lk-mp', this.getRandomInt()],
      ['lk-kg', this.getRandomInt()],
      ['lk-px', this.getRandomInt()],
      ['lk-rn', this.getRandomInt()],
      ['lk-gl', this.getRandomInt()],
      ['lk-hb', this.getRandomInt()],
      ['lk-mh', this.getRandomInt()],
      ['lk-bd', this.getRandomInt()],
      ['lk-mj', this.getRandomInt()],
      ['lk-ke', this.getRandomInt()],
      ['lk-co', this.getRandomInt()],
      ['lk-gq', this.getRandomInt()],
      ['lk-kt', this.getRandomInt()]
    ];
    this.sendChartData(data);
  }

  protected getRandomInt(): number {
    return Math.floor(Math.random() * (1000 - 100) + 100);
  }
}
