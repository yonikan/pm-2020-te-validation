import { Injectable } from '@angular/core';
import { TrainingValidation, MatchValidation } from './team-event-validation.model';

@Injectable({
  providedIn: 'root'
})
export class TeamEventValidationService {
  trainingData: TrainingValidation = {
    step1GeneralData: {
      test1: 'this is a test'
    },
    step2PlayersData: {
      test1: 'this is a test'
    },
    step3PhasesData: {
      test1: 'this is a test'
    }
  };

  matchgData: MatchValidation = {
      step1OverviewData: {
        test1: 'this is a test'
      },
      step2PlayersData: {
        test1: 'this is a test'
      },
      step3FormationsData: {
        test1: 'this is a test'
      },
      step4PhasesData: {
        test1: 'this is a test'
      },
      step5SubsData: {
        test1: 'this is a test'
      }
    };;

  constructor() { }

  getTrainingData(): any {
    return this.trainingData;
  }

  getMatchData(): any {
    return this.matchgData;
  }

  validateTraining(trainingPayload) {
    console.log('VALIDATE WORKS!');
    // sends this.trainingData to the backend
  }

  validateMatch(matchayload) {
    console.log('VALIDATE WORKS!');
    // sends this.matchgData to the backend
  }
}
