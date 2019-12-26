import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-match-phases',
  templateUrl: './step-match-phases.component.html',
  styleUrls: ['./step-match-phases.component.scss']
})
export class StepMatchPhasesComponent implements OnInit {
  @Input() stepMatchPhasesData: any;

  constructor() { }

  ngOnInit() {
    console.log('stepMatchPhasesData: ', this.stepMatchPhasesData);
  }
}
