import { Component, ViewChild } from '@angular/core';
import { UserDetails } from '../model/user-details';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-capture-and-view-details',
  templateUrl: './capture-and-view-details.component.html',
  styleUrls: ['./capture-and-view-details.component.css']
})
export class CaptureAndViewDetailsComponent {

  @ViewChild(ViewDetailsComponent) viewDetails!: ViewDetailsComponent;

  onUserDetailsEmitted(data: UserDetails):void{
    console.log("Emitted User Details recieved :: " + JSON.stringify(data));
    this.viewDetails.addUserDetails(data);
  }

}
