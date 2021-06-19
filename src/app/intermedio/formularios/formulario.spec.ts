import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario";

describe('Formularios', () => {

    let component: FormularioRegister;

    beforeEach(() => {
        component = new FormularioRegister(new FormBuilder());
    });
    

    it('Debe de crear un formulario con dos campos, email y password', () => {
        
        expect( component.form.contains('email')).toBeTruthy();
        expect( component.form.contains('password')).toBeTruthy();

    });

    it('El email debe ser obligatorio', () => {
        const control = component.form.get('email');
        control?.setValue('');
        expect( control?.valid ).toBeFalse();
    });

    it('El email debe ser un correo válido', () => {
        const control = component.form.get('email');
        control?.setValue('ramirez@gmail.com');
        expect( control?.valid ).toBeTruthy();
    });
    
    
});