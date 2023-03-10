import Note from "./notes";
import User from "./user";
import Team from "./teams";

Note.belongsTo(User);
User.hasMany(Note);

User.belongsToMany(Note, {through: Team, as: 'Teams'});
Note.belongsToMany(User, {through: Team, as: 'TeamNotes'});

module.exports={User, Note, Team};