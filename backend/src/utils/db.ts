import { Sequelize } from 'sequelize';
import config from './config';
import { Umzug, SequelizeStorage} from 'umzug';
import { Migration } from '../types';
// creating sequelize function with necessary variables
// to create a connection to my database
console.log(config);
export const sequelize = new Sequelize(
    config.NAME, 
    config.USER, 
    config.PASSWORD, 
    {
        host: config.HOST,
        dialect: 'postgres',
        port: config.DB_PORT
    });
// > docker exec -it db psql -U postgres -d db_name

export const connectToDatabase = async (): Promise<void> => {
        try{
            await sequelize.authenticate();
            await runMigrations();
            console.log(' Connected to database ');
        } catch (err) {
            console.log(' Failed to connect to database ');
            return process.exit(1);
        }
};

const migrationConf = {
    migrations: {
        glob: 'src/migrations/*.ts'
    },
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations'}),
    context: sequelize.getQueryInterface(),
    logger: console,
};

export const rollBackMigration = async (): Promise <void> => {
    await sequelize.authenticate();
    const migrator = new Umzug(migrationConf);
    await migrator.down();
};

export const runMigrations = async (): Promise <void> => {
    const migrator = new Umzug(migrationConf);
    const migrations = await migrator.up();
    console.log('Migrations up to date ', {
        files: migrations.map((mig: Migration) =>{
            mig.name;
        })
    });
};

