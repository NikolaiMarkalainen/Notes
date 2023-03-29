import { useEffect,useState } from "react";
import { AllNotes } from "../../services/noteService";
import { NoteSchema } from "../../types";
export const Note = () => {
    const [notes, setNotes] = useState<NoteSchema[]>([]);

    useEffect(() => {
    async function fetchData(){
        const data = await AllNotes();
        setNotes(data); 
    }
    fetchData();
    }, []);
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