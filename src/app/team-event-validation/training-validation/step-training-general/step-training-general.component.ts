import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-training-general',
  templateUrl: './step-training-general.component.html',
  styleUrls: ['./step-training-general.component.scss']
})
export class StepTrainingGeneralComponent implements OnInit {
  @Input() stepTrainingGeneralData: any;
  @Output() stepSelectionEmitter = new EventEmitter<number>();
  trainingDuration;
  trainingTags;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {

  }

  nextStep() {
    this.teamEventValidationService.trainingDataOutput.step1GeneralData = 'test-output';
    this.stepSelectionEmitter.emit(1);
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.trainingTags = tags;
  }
}
