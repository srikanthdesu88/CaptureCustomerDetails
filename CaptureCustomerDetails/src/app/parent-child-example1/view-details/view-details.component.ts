import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { UserDetails } from '../model/user-details';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {

  private gridApi!: GridApi<UserDetails>;

  onGridReady(params: GridReadyEvent<UserDetails>) {
    this.gridApi = params.api;
  }

  columnDefs: ColDef[] = [
    { field: 'firstName' },
    { field: 'lastName' }
  ];

  rowData: UserDetails[] = [];

  addUserDetails(userDetails: UserDetails): void {
    this.rowData.push(userDetails);
    this.gridApi.setRowData(this.rowData);   
  }
}
