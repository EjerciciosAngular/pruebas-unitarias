import { Jugador2 } from "./jugador2";


describe('Jugador 2 Emit', () => {
    let jugador: Jugador2;
    beforeEach(() => jugador = new Jugador2());

    it('Debe de emitir un evento cuando reciba danio', () => {
        let nuevoHP = 0;

        jugador.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        });

        jugador.recibeDanio(1000);

        expect(nuevoHP).toBe(0);
    });
    
    it('Debe de emitir un evento cuando reciba danio y sobrevivir si es menos de 10', () => {
        let nuevoHP = 0;

        jugador.hpCambia.subscribe( hp => nuevoHP = hp );

        jugador.recibeDanio(50);

        expect(nuevoHP).toBe(50);
    });
    
    
});