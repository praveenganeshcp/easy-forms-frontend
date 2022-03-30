import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FORM_ACTIONS } from '../../store/actions';
import { FormState } from '../../store/state';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  private formList$: Observable<FormState['list']>;
  constructor(private store: Store<{form: FormState}>) { 
    this.formList$ = this.store.select((state) => state.form.list);
  }

  ngOnInit(): void {
    this.store.dispatch(FORM_ACTIONS.LOAD_FORM_LIST());
  }

  getFormList() {
    return this.formList$;
  }

}
