import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  private rows = 2;
  private columns = 1;

  constructor() { }

  ngOnInit() {
  }

  counter(count): Array<number> {
    return new Array(count);
  }
}
