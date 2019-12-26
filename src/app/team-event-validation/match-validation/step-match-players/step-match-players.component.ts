import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-match-players',
  templateUrl: './step-match-players.component.html',
  styleUrls: ['./step-match-players.component.scss']
})
export class StepMatchPlayersComponent implements OnInit {
  @Input() stepMatchPlayersData: any;
  
  constructor() { }

  ngOnInit() {
    console.log('stepMatchPlayersData: ', this.stepMatchPlayersData);
  }
}
