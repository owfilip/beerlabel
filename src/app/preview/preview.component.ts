import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  private rows = 3;
  private columns = 3;

  constructor() { }

  ngOnInit() {
  }

  counter(count): Array<number> {
    return new Array(count);
  }
}
