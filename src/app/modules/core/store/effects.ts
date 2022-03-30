import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of } from "rxjs";
import { FormService } from "../services/form/form.service";
import { FORM_ACTIONS } from "./actions";

@Injectable()
export class FormEffects {

    constructor(private store: Store, private actions$: Actions, private formService: FormService) {}

    loadFormList = createEffect(() => {
        this.store.dispatch(FORM_ACTIONS.LOADING_FORM_LIST());
        return this.actions$.pipe(
            ofType(FORM_ACTIONS.LOAD_FORM_LIST),
            mergeMap(() => this.formService.fetchForms().pipe(
                map(forms => FORM_ACTIONS.FORMS_LIST_LOADED_SUCCESS({forms})),
                catchError(error => of(FORM_ACTIONS.ERROR_IN_LOADING_FORMS_LIST({error}))),
            ))
        )
    })

}