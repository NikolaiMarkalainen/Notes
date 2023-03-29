import { useAppSelector } from "../hooks";

export const Note = () => {

    const notes = useAppSelector(state => state.notes.notes);
    console.log(notes);
    return(
        <div>
        {notes.map(note => (
            <div key={note.id}>
                <p>Name: {note.title}</p>
                <p>Author: {note.author}</p>
                <p>Content: {note.content}</p>
                <p>Team: {note.teamId}</p>
            </div>
        ))}
        </div>   
    )
}