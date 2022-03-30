import { Form } from "../models/form.entity";

export interface FormList {
    data: Form[],
    error: string;
    isLoading: boolean;
}

export interface FormState {
    list: FormList
}