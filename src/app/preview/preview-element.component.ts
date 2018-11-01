import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { LabelDetails } from '../models/label-details.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preview-element',
  templateUrl: './preview-element.component.html',
  styleUrls: ['./preview-element.component.css']
})
export class PreviewElementComponent implements OnInit, OnDestroy {
  private labelDetails: LabelDetails;
  private subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.fetchLabel().subscribe((data: LabelDetails) => {
      this.labelDetails = data;
    },
    (error) => console.log(error));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
