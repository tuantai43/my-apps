import { Component, OnInit } from '@angular/core';
import { ActionType } from '@fa-management/directives';

interface Navigation {
  name: string;
  url: string;
  actionType: ActionType;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  readonly routes: Navigation[] = [
    {
      name: 'Class Management',
      url: 'class-management',
      actionType: ActionType.ClassManagement,
    },
    {
      name: 'Candidate Management',
      url: 'candidate-management',
      actionType: ActionType.CandidateManagement,
    },
    {
      name: 'Trainee Management',
      url: 'trainee-management',
      actionType: ActionType.TraineeManagement,
    },
    {
      name: 'Trainer Management',
      url: 'trainer-management',
      actionType: ActionType.TrainerManagement,
    },
    {
      name: 'Report Management',
      url: 'report-management',
      actionType: ActionType.ReportManagement,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
