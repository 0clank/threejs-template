import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import { EntityNoObject3D }                     from './mock/EntityNoObject3D';

describe('Entity', ( ) => {

    it('should have a name', ()=> {

        const entity = new EntityNoObject3D( 'test' );
        expect( entity.name ).toBe( 'test' );

    });

});