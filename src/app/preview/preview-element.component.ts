import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LabelDetails } from '../models/label-details.model';

@Component({
  selector: 'app-preview-element',
  templateUrl: './preview-element.component.html',
  styleUrls: ['./preview-element.component.css']
})
export class PreviewElementComponent implements OnInit {
  private labelDetails: LabelDetails;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.labelDetails = this.dataService.fetchLabel();
  }
}
