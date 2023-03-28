var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DataTypes } from "sequelize";
module.exports = {
    up: ({ context: queryInterface }) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.createTable('teams', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }),
            yield queryInterface.createTable('users', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        isEmail: true
                    },
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [8, 18]
                    }
                },
                team_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: { model: 'teams', key: 'id' }
                },
            }),
            console.log(queryInterface);
        yield queryInterface.createTable('notes', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // onDelete delete the notes of user as well
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                }
            },
            team_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: { model: 'teams', key: 'id' }
            },
        });
    }),
    down: ({ context: queryInterface }) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.dropTable('notes');
        yield queryInterface.dropTable('users');
        yield queryInterface.dropTable('teams');
    }),
};
//# sourceMappingURL=00_initialize_tables.js.map