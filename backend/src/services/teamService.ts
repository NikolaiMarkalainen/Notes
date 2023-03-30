
import { Team, User, Note } from "../models/index";
import { NewTeamEntry, SearchRequest, TeamAttributes, TeamSearchParams, TeamPagination } from "../types";

const getTeams = async  (req : SearchRequest): Promise <TeamAttributes[]> => {
    const where: TeamSearchParams= req.where || {};
    const teams = await Team.findAll({
        where,
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

const getPaginatedTeams = async( page : number ): Promise<TeamPagination> =>  {
    try{
        const LIMIT = 3;
        const OFFSET = (Number(page)- 1) * LIMIT;        
        const amount = await Team.count();
        const teams = await Team.findAll({
            limit: LIMIT,
            offset: OFFSET,
        });
        const pages = Math.ceil(amount / LIMIT);
        return {teams, pages, currentPage: page, totalResults: amount};
    } catch(error){
        throw new Error('Failed to fetch pagination');
    }
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
    createTeam, findById, getTeams, removeTeam, updateTeam, getPaginatedTeams
};

