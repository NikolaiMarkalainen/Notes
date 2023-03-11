import Note from "./notes";
import User from "./user";
import Team from "./teams";

// Relationship between Note and the User
// onDelete and onUpdate functionality to be added for all models
Note.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
User.hasMany(Note, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Relationship between Team and the User
User.belongsTo(Team);
Team.hasMany(User);

// Relationship between Note and the Team
Note.belongsTo(Team);
Team.hasMany(Note);

module.exports={User, Note, Team};
