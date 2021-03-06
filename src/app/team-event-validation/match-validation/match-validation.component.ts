import { Component, OnInit } from '@angular/core';
import { TeamEventValidationService } from '../team-event-validation.service';

@Component({
  selector: 'app-match-validation',
  templateUrl: './match-validation.component.html',
  styleUrls: ['./match-validation.component.scss']
})
export class MatchValidationComponent implements OnInit {
  step1Data: any;
  step2Data: any;
  step3Data: any;
  step4Data: any;
  step5Data: any;
  matchValidationPayload: any;
  currentSelectedStep = 0;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    const matchData = this.teamEventValidationService.getMatchData();
    this.step1Data = matchData.step1OverviewData;
    this.step2Data = matchData.step2PlayersData;
    this.step3Data = matchData.step3FormationsData;
    this.step4Data = matchData.step4PhasesData;
    this.step5Data = matchData.step5SubsData;
  }

  onStepSelectionEmitter(stepNumber) {
    this.currentSelectedStep = stepNumber;
  }

  onValidateMatch(matchPayload) {
    this.teamEventValidationService.validateMatch(matchPayload);
  }
}
