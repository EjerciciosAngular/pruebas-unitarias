import { mensaje } from './string';
// describe('Pruebas de Strings');
// it('Debe de regresar un string');

describe('Pruebas de strings', () => {
    it( 'Debe de regresar un string', () => {
        const resp =  mensaje('Josue');
        expect( typeof resp ).toBe('string');
    });

    it( 'Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Josue'
        const resp =  mensaje(nombre);
        // expect( resp ).toBe(`Saludos ${nombre}`);
        expect( resp ).toContain(`Saludos ${nombre}`);
    });
});