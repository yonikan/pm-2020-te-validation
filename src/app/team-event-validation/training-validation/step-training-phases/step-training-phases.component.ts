import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-training-phases',
  templateUrl: './step-training-phases.component.html',
  styleUrls: ['./step-training-phases.component.scss']
})
export class StepTrainingPhasesComponent implements OnInit {
  @Input() stepTrainingPhasesData: any; 
  trainingPhases;
  
  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepTrainingPhasesData: ', this.stepTrainingPhasesData);
  }

  validateTraining(data) {
    this.teamEventValidationService.trainingDataOutput.step3PhasesData = 'test-output';
    this.teamEventValidationService.validateTraining(data);
  }

  backStep() {

  }
}
