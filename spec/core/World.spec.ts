import { World }            from '../../src/core/World';
import { EntityNoObject3D } from './mock/EntityNoObject3D';
import { EntityWithObject3D } from './mock/EntityWithObject3D';

describe('World', ()=> {

    let world: World;

    beforeEach(function() {

        const canvas = document.createElement( 'canvas' );
        canvas.setAttribute( 'id', 'threejs-canvas' );
        document.body.appendChild( canvas );

        world = new World( );

    });

    it('should create a renderer, camera and scene', ()=> {
        expect(world.renderer).toBeDefined( );
        expect(world.camera).toBeDefined( );
        expect(world.scene).toBeDefined( );
    });

    it('should create a empty list', ()=> {
        expect(world.entities.size).toBe(0);
    });

    it('should call start() and end()', ( ) => {

        const entity = new EntityNoObject3D( 'test' );

        spyOn( EntityNoObject3D.prototype, 'start' );
        spyOn( EntityNoObject3D.prototype, 'end' );

        world.addEntity( entity );

        expect( EntityNoObject3D.prototype.start ).toHaveBeenCalledTimes(1);
        expect( EntityNoObject3D.prototype.end ).not.toHaveBeenCalled( );

        world.removeEntity( entity );

        expect( EntityNoObject3D.prototype.start ).toHaveBeenCalledTimes(1);
        expect( EntityNoObject3D.prototype.end ).toHaveBeenCalledTimes(1);

    });

    it('should add object3d to scene', ( ) => {

        const entity = new EntityNoObject3D( 'test' );
        const entity3d = new EntityWithObject3D( 'test2' );

        world.addEntity( entity );

        expect( world.entities.size ).toBe( 1 );
        expect( world.scene.children.length ).toBe( 1 );

        world.addEntity( entity3d );

        expect( world.entities.size ).toBe( 2 );
        expect( world.scene.children.length ).toBe( 2 );

        world.removeEntity( entity );

        expect( world.entities.size ).toBe( 1 );
        expect( world.scene.children.length ).toBe( 2 );

        world.removeEntity( entity3d );

        expect( world.entities.size ).toBe( 0 );
        expect( world.scene.children.length ).toBe( 1 );

    });

    it('should set pointer to this', ( ) => {

        const entity = new EntityNoObject3D( 'test' );
        const entity3d = new EntityWithObject3D( 'test2' );

        expect( entity.world ).toBeUndefined( );
        expect( entity3d.world ).toBeUndefined( );

        world.addEntity( entity );
        world.addEntity( entity3d );

        expect( entity.world ).toBe( world );
        expect( entity3d.world ).toBe( world );

    });

});