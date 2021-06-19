import { usuarioIngresado } from "./booleanos";

describe('Prueba de Booleanos', () => {
    it('Debe de retornar true', () => {
        const res = usuarioIngresado();
        // expect( res ).not.toBeTruthy();
        expect( res ).toBeTruthy();
        // expect( res ).toBeFalse;
    });
})
