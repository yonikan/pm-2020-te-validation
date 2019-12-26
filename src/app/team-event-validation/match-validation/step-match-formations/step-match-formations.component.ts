import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-match-formations',
  templateUrl: './step-match-formations.component.html',
  styleUrls: ['./step-match-formations.component.scss']
})
export class StepMatchFormationsComponent implements OnInit {
  @Input() stepMatchFormationsData: any;

  constructor() { }

  ngOnInit() {
    console.log('stepMatchFormationsData: ', this.stepMatchFormationsData);
  }
}
