import './style.scss';

import { World }      from './core/World';
import { CubeEntity } from './entity/CubeEntity';
import { TestEntity } from './entity/TestEntity';

/**
 * Entry point of the application
 *
 * @version 1.0.0
 */
export class Application
{

    private world: World;

    constructor()
    {

        this.world = new World( );
        document.body.appendChild( this.world.renderer.domElement );

        this.run();

    }

    public async run()
    {

        // Add default entities
        this.world.addEntity( new TestEntity( 'entity' ) );
        this.world.addEntity( new CubeEntity( 'entity3d' ) );

    }

}

const application = new Application();