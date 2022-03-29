import { createAction, props } from "@ngrx/store";
import { Form } from "../../models/form.entity";

export const FORM_ACTIONS = {
    LOAD_FORM_LIST : createAction('LOAD_FORM_LIST'),
    LOADING_FORM_LIST : createAction('LOADING_FORM_LIST'),
    FORMS_LIST_LOADED_SUCCESS : createAction('FORM_LIST_LOADED_SUCCESS', props<{forms: Form[]}>()),
    ERROR_IN_LOADING_FORMS_LIST: createAction('ERROR_IN_LOADING_FORM_LIST', props<{error: string}>()),
}