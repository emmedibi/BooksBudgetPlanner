import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  private _book = new BehaviorSubject<any> ({});

  constructor() { }

  getData(): Observable<any> {
    return this._book.asObservable();
  }

  setData(newBook: any){
    return this._book.next(newBook);
  }
}
