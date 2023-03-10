import Note from "./notes";
import User from "./user";
import Team from "./teams";

// Relationship between Note and the User
Note.belongsTo(User);
User.hasMany(Note);

// Relationship between Team and the User
User.belongsTo(Team);
Team.hasMany(User);

// Relationship between Note and the Team
Note.belongsTo(Team);
Team.hasMany(Note);

module.exports={User, Note, Team};
