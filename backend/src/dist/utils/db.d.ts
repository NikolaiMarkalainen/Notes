import { Sequelize } from 'sequelize';
export declare const sequelize: Sequelize;
export declare const connectToDatabase: () => Promise<void>;
export declare const rollBackMigration: () => Promise<void>;
export declare const runMigrations: () => Promise<void>;
