import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';

@Component({
  selector: 'app-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.scss']
})
export class AccountShellComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

}
