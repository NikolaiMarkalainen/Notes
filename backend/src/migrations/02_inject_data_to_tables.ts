import { MigrationContext } from "../types";
import bcrypt from 'bcrypt';
module.exports = {
    // manually adding id's for comparison of different data displays
    
    up: async ({ context: queryInterface} : MigrationContext) => {
        await queryInterface.bulkInsert('teams', [
            { name: 'Team A', id: 1 },
            { name: 'Team B', id: 2 },
            { name: 'Team C', id: 3 },
            { name: 'Team D', id: 4 },
            { name: 'Team E', id: 5 },
            { name: 'Team F', id: 6 },
            { name: 'Team G', id: 7 }
        ]);
        await queryInterface.bulkInsert('users', [
            { name: 'John Doe', username: 'johndoe@example.com', password: await bcrypt.hash('password', 10), id:1, team_id:1, admin: true },
            { name: 'Jane Smith', username: 'janesmith@example.com', password: await bcrypt.hash('password', 10), id:2, team_id:2, admin: false },
            { name: 'Bob Johnson', username: 'bobjohnson@example.com', password: await bcrypt.hash('password', 10), id:3, team_id:3, admin: false },
            { name: 'Alice Johnson', username: 'alicejohnson@example.com', password: await bcrypt.hash('password', 10), id: 4, team_id: 4, admin: false },
            { name: 'Tom Brown', username: 'tombrown@example.com', password: await bcrypt.hash('password', 10), id: 5, team_id: 5, admin: false },
            { name: 'Emily Davis', username: 'emilydavis@example.com', password: await bcrypt.hash('password', 10), id: 6, team_id: 6, admin: false },
            { name: 'Michael Lee', username: 'michaellee@example.com', password: await bcrypt.hash('password', 10), id: 7, team_id: 7, admin: false },
            { name: 'Lucy Kim', username: 'lucykim@example.com', password: await bcrypt.hash('password', 10), id: 8, team_id: 6, admin: false }
        ]);
        await queryInterface.bulkInsert('notes', [
            { title: 'First note', author: 'John Doe', content: 'This is my first note', user_id: 1, team_id: 1 },
            { title: 'Second note', author: 'Jane Smith', content: 'This is my second note', user_id: 2, team_id: 1 },
            { title: 'Third note', author: 'Bob Johnson', content: 'This is my third note', user_id: 3, team_id: 1 },
            { title: 'Fourth note', author: 'Alice Johnson', content: 'This is my fourth note', user_id: 4, team_id: 4 },
            { title: 'Fifth note', author: 'Tom Brown', content: 'This is my fifth note', user_id: 5, team_id: 5 },
            { title: 'Sixth note', author: 'Emily Davis', content: 'This is my sixth note', user_id: 6, team_id: 6 },
            { title: 'Seventh note', author: 'Michael Lee', content: 'This is my seventh note', user_id: 7, team_id: 7 },
            { title: 'Eighth note', author: 'Lucy Kim', content: 'This is my eighth note', user_id: 8, team_id: 6 }
        ]);
        await queryInterface.bulkInsert('owners', [
            {user_id: 1, team_id:1},
            {user_id: 2, team_id:2},
            {user_id: 3, team_id:3},
            {user_id: 4, team_id:4},
            {user_id: 5, team_id:5},
            {user_id: 6, team_id: 6},
            {user_id: 7, team_id: 7},
        ]);
    },
    down: async ({ context: queryInterface }: MigrationContext ) => {
        await queryInterface.bulkDelete('notes', {}, {});
        await queryInterface.bulkDelete('sessions', {}, {});
        await queryInterface.bulkDelete('owners', {}, {});
        await queryInterface.bulkDelete('users', {}, {});
        await queryInterface.bulkDelete('teams', {}, {});
      }
};