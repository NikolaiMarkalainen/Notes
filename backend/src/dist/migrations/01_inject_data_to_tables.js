var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    // manually adding id's for comparison of different data displays
    up: ({ context: queryInterface }) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('teams', [
            { name: 'Team A', id: 1 },
            { name: 'Team B', id: 2 },
            { name: 'Team C', id: 3 }
        ]);
        yield queryInterface.bulkInsert('users', [
            { name: 'John Doe', username: 'johndoe@example.com', password: 'password', team_id: 1, id: 1 },
            { name: 'Jane Smith', username: 'janesmith@example.com', password: 'password', team_id: 1, id: 2 },
            { name: 'Bob Johnson', username: 'bobjohnson@example.com', password: 'password', team_id: 1, id: 3 }
        ]);
        yield queryInterface.bulkInsert('notes', [
            { title: 'First note', author: 'John Doe', content: 'This is my first note', user_id: 1, team_id: 1 },
            { title: 'Second note', author: 'Jane Smith', content: 'This is my second note', user_id: 1, team_id: 1 },
            { title: 'Third note', author: 'Bob Johnson', content: 'This is my third note', user_id: 1, team_id: 1 }
        ]);
    }),
    down: ({ context: queryInterface }) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('notes', {}, {});
        yield queryInterface.bulkDelete('users', {}, {});
        yield queryInterface.bulkDelete('teams', {}, {});
    })
};
export {};
//# sourceMappingURL=01_inject_data_to_tables.js.map