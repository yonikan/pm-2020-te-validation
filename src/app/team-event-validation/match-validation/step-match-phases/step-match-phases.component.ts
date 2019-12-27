import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-match-phases',
  templateUrl: './step-match-phases.component.html',
  styleUrls: ['./step-match-phases.component.scss']
})
export class StepMatchPhasesComponent implements OnInit {
  @Input() stepMatchPhasesData: any;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepMatchPhasesData: ', this.stepMatchPhasesData);
  }

  nextStep() {
    this.teamEventValidationService.matchDataOutput.step4PhasesData = 'test-output';
  }

  backStep() {

  }
}
