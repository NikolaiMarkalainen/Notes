import { DataTypes, Model } from "sequelize";
import { sequelize } from '../utils/db';
class User extends Model {
}
User.init({
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
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'teams', key: 'id' }
    },
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'users',
});
export default User;
//# sourceMappingURL=user.js.map