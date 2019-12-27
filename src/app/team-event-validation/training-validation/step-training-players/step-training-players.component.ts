import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-training-players',
  templateUrl: './step-training-players.component.html',
  styleUrls: ['./step-training-players.component.scss']
})
export class StepTrainingPlayersComponent implements OnInit {
  @Input() stepTrainingPlayersData: any; 
  trainingPlayers;
  
  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepTrainingPlayersData: ', this.stepTrainingPlayersData);
  }

  nextStep() {
    this.teamEventValidationService.trainingDataOutput.step2PlayersData = 'test-output';
  }

  backStep() {

  }
}
