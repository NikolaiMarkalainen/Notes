import { MigrationContext } from "../types";

module.exports = {
    up: async ({ context: queryInterface} : MigrationContext) => {
        await queryInterface.bulkInsert('users', [
            { name: 'John Doe', username: 'johndoe@example.com', password: 'password' },
            { name: 'Jane Smith', username: 'janesmith@example.com', password: 'password' },
            { name: 'Bob Johnson', username: 'bobjohnson@example.com', password: 'password' }
        ]);
        await queryInterface.bulkInsert('notes', [
            { title: 'First note', author: 'John Doe', content: 'This is my first note', user_id: 1 },
            { title: 'Second note', author: 'Jane Smith', content: 'This is my second note', user_id: 2 },
            { title: 'Third note', author: 'Bob Johnson', content: 'This is my third note', user_id: 3 }
        ]);
        await queryInterface.bulkInsert('teams', [
            { name: 'Team A', user_id: 1, note_id: 1 },
            { name: 'Team B', user_id: 2, note_id: 2 },
            { name: 'Team C', user_id: 3, note_id: 3 }
        ]);
    },
    down: async ({ context: queryInterface }: MigrationContext ) => {
        await queryInterface.bulkDelete('teams', {}, {});
        await queryInterface.bulkDelete('notes', {}, {});
        await queryInterface.bulkDelete('users', {}, {});
      }
}