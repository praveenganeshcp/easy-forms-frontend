import { Component, OnInit } from '@angular/core';
import { AccountDataSourceService } from '../../services/account-data-source/account-data-source.service';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
