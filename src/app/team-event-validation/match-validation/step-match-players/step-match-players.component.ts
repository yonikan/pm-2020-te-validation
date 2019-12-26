import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-match-players',
  templateUrl: './step-match-players.component.html',
  styleUrls: ['./step-match-players.component.scss']
})
export class StepMatchPlayersComponent implements OnInit {
  @Input() stepMatchPlayersData: any;
  
  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    console.log('stepMatchPlayersData: ', this.stepMatchPlayersData);
  }

  nextStep() {
    this.teamEventValidationService.matchgDataOutput.step2PlayersData = 'test-output';
  }

  backStep() {

  }
}
