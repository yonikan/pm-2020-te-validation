import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-match-subs',
  templateUrl: './step-match-subs.component.html',
  styleUrls: ['./step-match-subs.component.scss']
})
export class StepMatchSubsComponent implements OnInit {
  @Input() stepMatchSubsData: any;
  
  constructor() { }

  ngOnInit() {
    console.log('stepMatchSubsData: ', this.stepMatchSubsData);
  }

  validateMatch() {

  }
}
