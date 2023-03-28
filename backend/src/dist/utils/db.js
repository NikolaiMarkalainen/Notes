var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Sequelize } from 'sequelize';
import config from './config';
import { Umzug, SequelizeStorage } from 'umzug';
// creating sequelize function with necessary variables
// to create a connection to my database
console.log(config);
export const sequelize = new Sequelize(config.NAME, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: 'postgres',
    port: config.DB_PORT
});
// > docker exec -it db psql -U postgres -d db_name
export const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        yield runMigrations();
        console.log(' Connected to database ');
    }
    catch (err) {
        console.log(' Failed to connect to database ');
        return process.exit(1);
    }
});
const migrationConf = {
    migrations: {
        glob: 'migrations/*.ts'
    },
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
    context: sequelize.getQueryInterface(),
    logger: console,
};
export const rollBackMigration = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.authenticate();
    const migrator = new Umzug(migrationConf);
    yield migrator.down();
});
export const runMigrations = () => __awaiter(void 0, void 0, void 0, function* () {
    const migrator = new Umzug(migrationConf);
    const migrations = yield migrator.up();
    console.log('Migrations up to date ', {
        files: migrations.map((mig) => {
            mig.name;
        })
    });
});
//# sourceMappingURL=db.js.map