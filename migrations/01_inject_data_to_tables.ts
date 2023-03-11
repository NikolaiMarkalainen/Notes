import { MigrationContext } from "../types";

module.exports = {
    // manually adding id's for comparison of different data displays
    
    up: async ({ context: queryInterface} : MigrationContext) => {
        await queryInterface.bulkInsert('teams', [
            { name: 'Team A', id: 1 },
            { name: 'Team B', id: 2 },
            { name: 'Team C', id: 3 }
        ]);
        await queryInterface.bulkInsert('users', [
            { name: 'John Doe', username: 'johndoe@example.com', password: 'password', team_id: 1, id:1 },
            { name: 'Jane Smith', username: 'janesmith@example.com', password: 'password', team_id: 1, id:2 },
            { name: 'Bob Johnson', username: 'bobjohnson@example.com', password: 'password', team_id: 1, id:3 }
        ]);
        await queryInterface.bulkInsert('notes', [
            { title: 'First note', author: 'John Doe', content: 'This is my first note', user_id: 1, team_id: 1 },
            { title: 'Second note', author: 'Jane Smith', content: 'This is my second note', user_id: 1, team_id: 1 },
            { title: 'Third note', author: 'Bob Johnson', content: 'This is my third note', user_id: 1, team_id: 1 }
        ]);
    },
    down: async ({ context: queryInterface }: MigrationContext ) => {
        await queryInterface.bulkDelete('notes', {}, {});
        await queryInterface.bulkDelete('users', {}, {});
        await queryInterface.bulkDelete('teams', {}, {});
      }
}