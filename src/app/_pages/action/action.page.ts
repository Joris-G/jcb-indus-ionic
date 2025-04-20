import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddActionComponent } from './add-action/add-action.component';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {
  editing: any = {};
  ColumnMode = ColumnMode;
  private activatedRoute = inject(ActivatedRoute);
  private modalCtrl = inject(ModalController);
  actionId!: string;
  rows: any = [  ];
  columns = [
    { name: 'Date de creation' },
    // { name: 'Description' },
    { name: 'Commentaire' },
    { name: 'Statut' },
  ];

  updateValue(event: any, cell: any, rowIndex: string) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
  ngOnInit() {
    this.actionId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.rows = [
      ...this.rows,
      {
        dateDeCreation: new Date().toString(),
        description: '',
        commentaire: '',
      },
    ];
  }
  addAction() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddActionComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
}
