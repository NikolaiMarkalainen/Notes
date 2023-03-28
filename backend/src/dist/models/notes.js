import { DataTypes, Model } from "sequelize";
import { sequelize } from '../utils/db';
class Note extends Model {
}
Note.init({
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
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'users', key: 'id' }
    },
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'teams', key: 'id' }
    },
}, {
    timestamps: false,
    underscored: true,
    modelName: 'notes',
    sequelize
});
export default Note;
//# sourceMappingURL=notes.js.map