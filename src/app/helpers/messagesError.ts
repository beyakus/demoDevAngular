import { FormControl } from '@angular/forms';

export class MessagesForm {

    /**
     *
     * @param form Name the form to valid
     * @returns Return messages error
     */
    static messages(form: FormControl): string {
        let result;

        if (form.errors.required) {
            result = '* El campo es requerido';
        }

        return result;
    }
}