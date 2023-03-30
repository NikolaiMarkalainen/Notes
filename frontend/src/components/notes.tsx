import { useState } from "react";
import { useGetPaginatedNotesQuery } from "../state";
import "../styles.css"

export const Note = () => {

    const [page, setPage] = useState(1);
    const {data: notes, isFetching, isLoading} = useGetPaginatedNotesQuery(page);
    if(!notes){
        return(
            <div> No Notes </div>
        )
    }
    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    const maxPages = notes.pages
    return(
        <div>
        <h1 className="description">Notes</h1>
        <div className="description">
            A page to view different notes created by users
        </div>
        {notes.notes.map(note => (
            <div className = "mappedData"key={note.id}>
                <p>Name: {note.title}<br></br>
                Author: {note.author}<br></br>
                Content: {note.content}<br></br>
                Team: {note.teamId}<br></br></p>
            </div>
        ))}
        <button onClick={() => setPage( page - 1)} disabled={isFetching || page <= 1 }> Back </button>
        <button onClick={() => setPage( page + 1)} disabled={isFetching || page === maxPages }> Next </button>
        </div>   
    )
}