import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from './services/data.service';
import { LabelDetails } from './models/label-details.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit, OnDestroy {
  @ViewChild('f') previewForm: NgForm;
  private fetchLabelSubscription: Subscription;
  private labelDetails2: LabelDetails;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    // let labelDetails2: LabelDetails;
    this.fetchLabelSubscription = this.dataService.fetchLabel().subscribe(labelDetails => {
      console.log(labelDetails);
      this.labelDetails2 = labelDetails;
      setTimeout(() => {
        this.initForm();
      }, 0);
    });
  }

  private initForm() {
    this.previewForm.setValue({
      title: this.labelDetails2.title,
      alcohol: this.labelDetails2.alcohol,
      extract: this.labelDetails2.extract,
      malts: this.labelDetails2.malts,
      hops: this.labelDetails2.hops,
      yeast: this.labelDetails2.yeast,
      bottlingDate: this.labelDetails2.bottlingDate
    });
  }

  onSubmit() {
    const labelDetails = new LabelDetails();

    labelDetails.title = this.previewForm.value.title;
    labelDetails.alcohol = this.previewForm.value.alcohol;
    labelDetails.extract = this.previewForm.value.extract;
    labelDetails.malts = this.previewForm.value.malts;
    labelDetails.hops = this.previewForm.value.hops;
    labelDetails.yeast = this.previewForm.value.yeast;
    labelDetails.bottlingDate = this.previewForm.value.bottlingDate;

    this.dataService.saveLabel(labelDetails);
    this.router.navigate(['/preview']);
  }

  ngOnDestroy(): void {
    this.fetchLabelSubscription.unsubscribe();
  }
}
