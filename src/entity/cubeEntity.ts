import { Entity3D }                             from '../core/entity3d';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

export class CubeEntity extends Entity3D
{

    private cube!: Mesh;

    constructor( name: string )
    {
        super( name );
    }

    start()
    {

        super.start();

        this.object3D.position.setZ( -5 );

        const geometry = new BoxGeometry( 1, 1, 1 );
        const material = new MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new Mesh( geometry, material );

        this.object3D.add( this.cube );

    }

    update( delta: number )
    {

        super.update( delta );

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

    }

    end()
    {

        super.end();
        this.cube.geometry.dispose( );

    }
}