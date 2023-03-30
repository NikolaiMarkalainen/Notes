import { useAppSelector } from "../hooks";
import "../styles.css"

export const Note = () => {

    const notes = useAppSelector(state => state.notes.notes);
    console.log(notes);
    return(
        <div>
        <h1 className="description">Notes</h1>
        <div className="description">
            A page to view different notes created by users
        </div>
        {notes.map(note => (
            <div className = "mappedData"key={note.id}>
                <p>Name: {note.title}<br></br>
                Author: {note.author}<br></br>
                Content: {note.content}<br></br>
                Team: {note.teamId}<br></br></p>
            </div>
        ))}
        </div>   
    )
}