import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { filter, take } from 'rxjs';
import { CoreFacade, UserRole } from '../store/core';

export enum ActionType {
  ClassManagement = 'ClassManagement',
  CreateClass = '[ClassManagement] Create class',
  UpdateClass = '[ClassManagement] Update class',
  CancelClass = '[ClassManagement] Cancel class',
  ImportTrainee = '[ClassManagement] Import trainee to class',
  AddTrainee = '[ClassManagement] Add trainee',
  RemoveTrainee = '[ClassManagement] Remove trainee',
  SubmitClass = '[ClassManagement] Submit class',
  ApproveClass = '[ClassManagement] Approve class',
  RejectClass = '[ClassManagement] Reject class',
  DeclineClass = '[ClassManagement] Decline class',
  StartClass = '[ClassManagement] Start class',
  FinishClass = '[ClassManagement] Finish class',
  CloseClass = '[ClassManagement] Close class',
  RequestInfomation = '[ClassManagement] Request for more infomation',
  CandidateManagement = 'CandidateManagement',
  CreateCandidate = '[CandidateManagement] Create candidate profile',
  UpdateCandidate = '[CandidateManagement] Update candidate',
  ViewCandidate = '[CandidateManagement] View candidate',
  DeleteCandidate = '[CandidateManagement] Delete candidate',
  TraineeManagement = 'TraineeManagement',
  UpdateTrainee = '[TraineeManagement] Update trainee',
  ViewTrainee = '[TraineeManagement] View trainee',
  DeleteTrainee = '[TraineeManagement] Delete trainee',
  TrainerManagement = 'TrainerManagement',
  CreateTrainer = '[TrainerManagement] Create trainer',
  UpdateTrainer = '[TrainerManagement] Update trainer',
  ViewTrainer = '[TrainerManagement] View trainer',
  DeleteTrainer = '[TrainerManagement] Delete trainer',
  ReportManagement = 'ReportManagement',
  CreateReport = '[ReportManagement] Create report',
  ViewReport = '[ReportManagement] View report',
  ExportReport = '[ReportManagement] Export report',
}

interface Permission {
  roles: UserRole[];
  enable?: UserRole[];
}

@Directive({
  selector: '[appActionButton]',
})
export class ActionButtonDirective {
  readonly accept: { [key: string]: Permission } = {
    [ActionType.ClassManagement]: {
      roles: [UserRole.All],
    },
    [ActionType.CandidateManagement]: {
      roles: [UserRole.All],
    },
    [ActionType.TraineeManagement]: {
      roles: [
        UserRole.FaManager,
        UserRole.DeliveryManager,
        UserRole.ClassAdmin,
        UserRole.Trainer,
        UserRole.SystemAdmin,
      ],
    },
    [ActionType.TrainerManagement]: {
      roles: [UserRole.All],
    },
    [ActionType.ReportManagement]: {
      roles: [UserRole.All],
    },
    [ActionType.CreateClass]: {
      roles: [UserRole.FaManager, UserRole.DeliveryManager, UserRole.SystemAdmin],
    },
    [ActionType.SubmitClass]: {
      roles: [UserRole.FaManager, UserRole.DeliveryManager, UserRole.ClassAdmin, UserRole.SystemAdmin],
    },
    [ActionType.UpdateClass]: {
      roles: [UserRole.FaManager, UserRole.DeliveryManager, UserRole.SystemAdmin],
    },
    [ActionType.CancelClass]: {
      roles: [UserRole.FaManager, UserRole.DeliveryManager, UserRole.SystemAdmin],
    },
  };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private coreFacade: CoreFacade
  ) {}

  @Input()
  set appActionButton(actionType: ActionType) {
    this.coreFacade.roles$
      .pipe(
        filter((roles) => !!roles.length),
        take(1)
      )
      .subscribe((roles) => {
        const action = this.accept[actionType];
        if (action && (action.roles.includes(UserRole.All) || roles.find((r) => action.roles.includes(r)))) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }
}
