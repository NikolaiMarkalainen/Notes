import { DataTypes, Model } from "sequelize";
import { sequelize } from '../utils/db';
class Team extends Model {
}
Team.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    underscored: true,
    modelName: 'teams',
    sequelize
});
export default Team;
//# sourceMappingURL=teams.js.map