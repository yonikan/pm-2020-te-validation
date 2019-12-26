import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-match-formations',
  templateUrl: './step-match-formations.component.html',
  styleUrls: ['./step-match-formations.component.scss']
})
export class StepMatchFormationsComponent implements OnInit {
  @Input() stepMatchFormationsData: any;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepMatchFormationsData: ', this.stepMatchFormationsData);
  }

  nextStep() {
    this.teamEventValidationService.matchgDataOutput.step3FormationsData = 'test-output';
  }

  backStep() {

  }
}
