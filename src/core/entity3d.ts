import { Entity }   from './Entity';
import { Object3D } from 'three';
import { World }    from './world';

export class Entity3D extends Entity {

    private _object3D: Object3D;

    constructor( name: string )
    {

        super( name );

        this._object3D = new Object3D();

    }

    public addToObject3D( obj3D: Object3D ): void {

        this._object3D.add(obj3D);

    }

    public removeFromObject3D( obj3D: Object3D ) : void {

        this._object3D.remove(obj3D);

    }

    get object3D(): Object3D
    {
        return this._object3D;
    }

    set object3D( value: Object3D )
    {
        this._object3D = value;
    }
}