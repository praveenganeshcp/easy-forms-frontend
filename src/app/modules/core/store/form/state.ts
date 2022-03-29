import { Form } from "../../models/form.entity";

export interface FormState {
    list: {
        data: Form[],
        error: string;
        isLoading: boolean;
    }
}