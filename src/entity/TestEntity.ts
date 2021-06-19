import { Entity } from '../core/Entity';

export class TestEntity extends Entity
{

    constructor( name: string )
    {
        super( name );
    }

    start()
    {
        super.start();
        console.log( this.world );
    }

    update( delta: number )
    {
        super.update( delta );
    }

    end()
    {
        super.end();
    }
}