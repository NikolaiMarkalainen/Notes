import Note from "./notes";
import User from "./user";
import Team from "./teams";

// Relationship between Note and the User
// onDelete and onUpdate functionality to be added for all models
Note.belongsTo(User, {
    onDelete: 'CASCADE'
});
User.hasMany(Note, {
    onDelete: 'CASCADE'
});

// Relationship between Team and the User
User.belongsTo(Team);
Team.hasMany(User, {
    onDelete: 'SET NULL'
});

// Relationship between Note and the Team
Note.belongsTo(Team);
Team.hasMany(Note, {
    onDelete: 'SET NULL'
});

export {Note, User, Team};

