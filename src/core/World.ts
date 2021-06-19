import {
    EventDispatcher,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
}                   from 'three';
import { Entity }   from './Entity';
import { Entity3d } from './Entity3d';

export class World {

    private _renderer: WebGLRenderer;
    private _scene: Scene;
    private _camera: PerspectiveCamera;
    private _canvas: HTMLCanvasElement;

    private _entities: Map<string, Entity>;

    constructor( )
    {

        // Creating Map
        this._entities = new Map<string, Entity>( );

        // Canvas
        this._canvas = <HTMLCanvasElement> document.getElementById( 'threejs-canvas' );

        // Creating default objects
        this._renderer = new WebGLRenderer( {
            canvas: this._canvas
        } );
        this._renderer.setSize( window.innerWidth, window.innerHeight );

        // Camera
        this._camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        // Added to scene
        this._scene = new Scene( );
        this._scene.add( this._camera );

        // Setting up Gameloop
        this._renderer.setAnimationLoop( ( delta: number ) => {

            this.update( delta );

        } );

    }

    private update( delta: number )
    {

        this._entities.forEach( ( entity ) => {

            entity.update( delta );

        } );

        this._renderer.render( this._scene, this._camera );

    }

    public addEntity( entity: Entity ): void {

        entity.world = this;
        this._entities.set( entity.name, entity );

        if ( ( entity as Entity3d ).object3D ) {

            this._scene.add( ( entity as Entity3d ).object3D );

        }

        entity.start( );

    }

    public removeEntity( entity: Entity ): void {

        this._entities.delete( entity.name );
        entity.end( );

    }

    get renderer(): WebGLRenderer
    {
        return this._renderer;
    }

    set renderer( value: WebGLRenderer )
    {
        this._renderer = value;
    }

    get scene(): Scene
    {
        return this._scene;
    }

    set scene( value: Scene )
    {
        this._scene = value;
    }

    get camera(): PerspectiveCamera
    {
        return this._camera;
    }

    set camera( value: PerspectiveCamera )
    {
        this._camera = value;
    }

    get entities(): Map<string, Entity>
    {
        return this._entities;
    }

    set entities( value: Map<string, Entity> )
    {
        this._entities = value;
    }
}