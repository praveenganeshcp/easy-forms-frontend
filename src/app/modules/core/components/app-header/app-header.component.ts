import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  getMenus(): {view: string, link: string}[] {
    return [
      { view: 'Home', link: '' },
      { view: 'Trash', link: '' },
      { view: 'Profile', link: '' }
    ]
  }

}
