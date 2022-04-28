import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const StrongPassword: ValidatorFn = (formControl: AbstractControl): ValidationErrors | null => {
    const password: string = formControl.value;
    if(!password) {
        return null;
    }
    let capitalLetters = 0;
    let smallLetters = 0;
    let numbers = 0;
    const passwordLen = password.length;
    for(let charPos = 0; charPos < passwordLen; charPos++) {
        const charCodePoint = password.charCodeAt(charPos);
        if(charCodePoint >= 65 && charCodePoint <= 90) {
            ++capitalLetters;
        }
        else if(charCodePoint >= 97 && charCodePoint <= 122) {
            ++smallLetters;
        }
        else if(charCodePoint >= 48 && charCodePoint <= 57) {
            ++numbers;
        }
    }
    if(capitalLetters < 1 || smallLetters < 1 || numbers < 1) {
        return {passwordConstraint: "should contain minimum 8 characters with atlease (A-Z, a-z, 0-9)"}
    }
    return null;
}