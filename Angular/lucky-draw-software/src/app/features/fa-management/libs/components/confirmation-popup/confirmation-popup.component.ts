import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export enum PopupType {
  Confirmation,
  Custom,
}

export const MIN_WIDTH = '40rem';

interface Data {
  type: PopupType;
  title: string;
  content: string;
}

const label = {
  [PopupType.Confirmation]: {
    title: 'popup.confirmation.title',
    content: 'popup.confirmation.content',
  },
};

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent implements OnInit {
  popupType = PopupType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Data) {}

  ngOnInit(): void {}
}
