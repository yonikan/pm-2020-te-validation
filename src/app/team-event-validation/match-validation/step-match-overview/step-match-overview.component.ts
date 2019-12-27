import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-match-overview',
  templateUrl: './step-match-overview.component.html',
  styleUrls: ['./step-match-overview.component.scss']
})
export class StepMatchOverviewComponent implements OnInit {
  @Input() stepMatchOverviewData: any;
  matchesTags;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepMatchOverviewData: ', this.stepMatchOverviewData);
  }
  
  nextStep() {
    this.teamEventValidationService.matchDataOutput.step1OverviewData = 'test-output';
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.matchesTags = tags;
  }
}
