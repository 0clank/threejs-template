import { EntityWithObject3D }                   from './mock/EntityWithObject3D';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

describe('Entity3D', ()=> {

    it('should create a object3d', ()=> {

        const entity = new EntityWithObject3D( 'test' );
        expect( entity.object3D ).toBeDefined( );

    });

    it('should add and remove children', ()=> {

        const entity = new EntityWithObject3D( 'test' );

        const geometry = new BoxGeometry( 1, 1, 1 );
        const material = new MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new Mesh( geometry, material );

        entity.addToObject3D( cube );

        expect( entity.object3D ).toBeDefined( );
        expect( entity.object3D.children.length ).toBe( 1 );

        entity.removeFromObject3D( cube );

        expect( entity.object3D.children.length ).toBe( 0 );

    });

});