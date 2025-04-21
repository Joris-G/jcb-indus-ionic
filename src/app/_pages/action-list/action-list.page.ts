import { Component, OnInit, inject } from '@angular/core';
import { ColumnMode, SelectionType, TableColumn } from '@swimlane/ngx-datatable';
import { Action } from 'src/app/_interfaces/action.interface';
import { ActionService } from 'src/app/_services/actions/action.service';
import { HeaderTitleService } from 'src/app/_services/title/header-title.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.page.html',
  styleUrls: ['./action-list.page.scss'],
})
export class ActionListPage implements OnInit {
  isLoading = true;
  isError = false;
  selected: Action[] = [];


  pageTitle: string = 'Action List';
  headerTitleService = inject(HeaderTitleService);
  actionService = inject(ActionService);

  SelectionType = SelectionType;
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
    this.loadActions();

  }
  private loadActions(onComplete?: () => void) {
    this.actionService.getActions().subscribe({
      next: (actions) => {
        this.actionsRows = [...actions];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des actions :', err);
        this.isError = true;
        this.isLoading = false;
      },
    });
  }
  ColumnMode = ColumnMode;

  refreshData() {
    this.loadActions();
  }

  handleRefresh(event: any) {
    this.loadActions(() => event.target.complete());
  }

  onRowSelect(event: Action) {
    console.log(this.selected = [...this.selected, event]);
  }

  allowSelection(row: Action) {
    return row.createdBy !== 'Beryl Rice';
  }
}
