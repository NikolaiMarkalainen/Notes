const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isUser = (id) => {
    return typeof id === 'number';
};
const parseTitle = (title) => {
    if (!title || !isString(title)) {
        throw Error('Incorrect or missing title');
    }
    return title;
};
const parseContent = (content) => {
    if (!content || !isString(content)) {
        throw Error('Incorrect or missing content');
    }
    return content;
};
const parseAuthor = (author) => {
    if (!author || !isString(author)) {
        throw Error('Incorrect or missing author');
    }
    return author;
};
const parseUser = (user) => {
    if (!user || !isUser(user)) {
        throw Error('Missing user authorization');
    }
    return user;
};
const toNewNoteEntry = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('title' in object && 'content' in object && 'author' in object && 'userId' in object) {
        const newNote = {
            title: parseTitle(object.title),
            content: parseContent(object.content),
            author: parseAuthor(object.author),
            userId: parseUser(object.userId)
        };
        return newNote;
    }
    throw new Error('Incorrect data: a field is missing');
};
export default toNewNoteEntry;
//# sourceMappingURL=noteUtils.js.map