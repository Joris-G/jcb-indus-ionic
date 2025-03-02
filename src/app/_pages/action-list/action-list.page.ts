import { Component, OnInit, inject } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Action } from 'src/app/_interfaces/action.interface';
import { ActionService } from 'src/app/_services/actions/action.service';
import { HeaderTitleService } from 'src/app/_services/title/header-title.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.page.html',
  styleUrls: ['./action-list.page.scss'],
})
export class ActionListPage implements OnInit {
  pageTitle: string = 'Action List';
  headerTitleService = inject(HeaderTitleService);
  actionService = inject(ActionService);
  actionsRows: Action[] = [];
  columns: TableColumn[] = [
    { name: 'Statut', prop: 'status', sortable: true },
    { name: 'Créé par', prop: 'createdBy' },
    { name: 'Titre', prop: 'title' },
    { name: 'Description' },
    { name: 'Date besoin', prop: 'needDate' },
    { name: 'Responsable' },
  ];

  ngOnInit() {
    this.headerTitleService.setTitle(this.pageTitle);
    this.actionService.getActions().subscribe({
      next: (actions) => {
        this.actionsRows = [...actions];
      },
    });
  }

  onRowClick(event: any) {
    if (event.type == 'click') {
      console.log(event.row);
    }
  }
}
