import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-match-subs',
  templateUrl: './step-match-subs.component.html',
  styleUrls: ['./step-match-subs.component.scss']
})
export class StepMatchSubsComponent implements OnInit {
  @Input() stepMatchSubsData: any;
  
  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepMatchSubsData: ', this.stepMatchSubsData);
  }
  
  validateMatch(data) {
    this.teamEventValidationService.matchDataOutput.step5SubsData = 'test-output';
    this.teamEventValidationService.validateMatch(data);
  }

  backStep() {

  }
}
