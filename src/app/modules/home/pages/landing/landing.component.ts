import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  getHeaderLinks(): { name: string, routeLink: string }[] {
    return [
      {
        name: 'Login',
        routeLink: '/accounts/login',
      },
      {
        name: 'Create Account',
        routeLink: '/accounts/create-account',
      }
    ]
  }

  getFeatureList(): { name: string, description: string, iconName: string }[] {
    return [
      {
        name: 'Simple interface',
        description: 'Drag and drop form fields makes it easy to create forms in minutes',
        iconName: 'drag_indicator'
      },
      {
        name: 'Customization',
        description: 'Decide field name, datatype, label, description, color, background-color and more',
        iconName: 'dashboard_customize',
      },
      {
        name: 'Export as required',
        description: 'Export the data in JSON and Excel sheets',
        iconName: 'upgrade'
      }
    ]
  }

}
