import { Injectable } from '@angular/core';
import { LabelDetails } from '../models/label-details.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private label: LabelDetails = {
    id: '1',
    title: 'A Beer Title',
    alcohol: '5,5',
    extract: '14,5',
    malts: 'pilzneński, pale ale, pszeniczny, karmelowy, melanoidynowy',
    hops: 'sybilla, ahtanum, simcoe, citra, centennial',
    yeast: 'US-04',
    bottlingDate: '19 listopada 2018'
  };

  constructor() { }

  saveLabel(labelDetails: LabelDetails): void {
    this.label = labelDetails;
  }

  fetchLabel(): Observable<LabelDetails> {
    const obs = new BehaviorSubject<LabelDetails>(new LabelDetails());
    obs.next(this.label);
    return obs.asObservable();
  }
}
