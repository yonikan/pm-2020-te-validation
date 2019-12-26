import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-match-overview',
  templateUrl: './step-match-overview.component.html',
  styleUrls: ['./step-match-overview.component.scss']
})
export class StepMatchOverviewComponent implements OnInit {
  @Input() stepMatchOverviewData: any;
  matchesTags;

  constructor() { }

  ngOnInit() {
    console.log('stepMatchOverviewData: ', this.stepMatchOverviewData);
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.matchesTags = tags;
  }
}
