import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'convl-edit-block-details-modal',
  templateUrl: './edit-block-details-modal.component.html',
  styleUrls: ['./edit-block-details-modal.component.scss'],
})
export class EditBlockDetailsModalComponent {
  @ViewChild('drawer') matDrawer: MatDrawer;

  toggleModal() {
    this.matDrawer.toggle();
  }
}
