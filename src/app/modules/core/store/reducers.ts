import { Action, createReducer, on } from "@ngrx/store";
import { cloneDeep } from 'lodash';
import { FORM_ACTIONS } from "./actions";
import { FormState } from "./state";

const initialFormState: FormState = {
    list: {
        error: '',
        isLoading: false,
        data: []
    }
}

const _formReducer = createReducer(initialFormState, 
        on(FORM_ACTIONS.LOADING_FORM_LIST, (state) => {
            const newState = cloneDeep(state);
            newState.list = {
                error: '',
                data: [],
                isLoading: true,
            }
            return newState;
        }),
        on(FORM_ACTIONS.FORMS_LIST_LOADED_SUCCESS, (state, { forms }) => {
            const newState = cloneDeep(state);
            newState.list = {
                error: '',
                data: forms,
                isLoading: false,
            }
            return newState;
        }),
        on(FORM_ACTIONS.ERROR_IN_LOADING_FORMS_LIST, (state, { error }) => {
            const newState = cloneDeep(state);
            newState.list = {
                error,
                data: [],
                isLoading: false,
            }
            return newState;
        })
    )

export function formReducer(state: FormState | undefined, action: Action) {
    return _formReducer(state, action);
}