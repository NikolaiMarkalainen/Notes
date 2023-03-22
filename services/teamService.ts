
import { Team, User, Note } from "../models/index";
import { NewTeamEntry, TeamAttributes } from "../types";

const getTeams = async  (): Promise <TeamAttributes[]> => {
    const teams = await Team.findAll({
        include: {
            model: User,
            attributes: ['name', 'username'],
            include:[
            {
                model: Note,
                attributes:['title','content'],
            },
        ],
        },
    });
    return teams;
};

const findById = async (id: number): Promise<TeamAttributes | null> => {
    const team = await Team.findByPk(id);
    return team;
};


const createTeam = async (entry: NewTeamEntry): Promise<NewTeamEntry> => {
    const team = await Team.create(entry);
    console.log(team);
    return team;
};

const removeTeam = async (id: number): Promise<number> => {
    const deletedTeam =  await Team.destroy({where: { id }});
    return deletedTeam;
};

const updateTeam = async (id: number, updateTeam: TeamAttributes): Promise <TeamAttributes | null> => {
    const team = await Team.findByPk(id);
    console.log(team);
    if(!team) throw new Error('Not found');
    await team.update(updateTeam);
    return team;
};

 export default {
    createTeam, findById, getTeams, removeTeam, updateTeam
};

