import { obtenerRobots } from './arreglos';

describe('Pryeba de arreglos', () => {
    it('Debe de retornar al menos 3 robots', () => {
       const res = obtenerRobots();
       expect( res.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe de exister MegaMan y Ultron', () => {
       const res = obtenerRobots();
       expect( res ).toContain('MegaMan');
       expect( res ).toContain('Ultron');
    });
})
