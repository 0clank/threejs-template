import { World } from './World';

export class Entity {

    private _name: string;
    private _world: World | undefined;

    constructor( name: string ) {

        this._name = name;

    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public start(  ): void { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public update( delta: number ): void { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public end( ): void { }

    get world(): World | undefined
    {
        return this._world;
    }

    set world( value: World | undefined )
    {
        this._world = value;
    }

    get name(): string
    {
        return this._name;
    }

    set name( value: string )
    {
        this._name = value;
    }
}