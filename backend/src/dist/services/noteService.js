var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Note } from "../models/index";
const notes = [];
const getNotes = () => {
    return notes;
};
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield Note.findByPk(id);
    return notes;
});
const createNotes = (entry) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield Note.create(entry);
    return note;
});
const removeNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedNote = yield Note.destroy({ where: { id } });
    return deletedNote;
});
const updateNote = (id, updateNote) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield Note.findByPk(id);
    if (!note)
        throw new Error('Not found');
    yield note.update(updateNote);
    return note;
});
export default {
    createNotes, findById, getNotes, removeNote, updateNote
};
//# sourceMappingURL=noteService.js.map