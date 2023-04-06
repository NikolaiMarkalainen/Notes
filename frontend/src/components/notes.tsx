import { useState } from "react";
import { useGetPaginatedNotesQuery } from "../state";

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
        <div className="card-container">
        {notes.notes.map(note => (
            <div className = "card"key={note.id}>
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle">By {note.author}</h6>
                <p className="card-text"> {note.content}</p>
                <button className="btn btn-primary card-button"> {note.teamId}</button>
            </div>
        ))}
        <div className="button-container">
            <button className="btn btn-primary" onClick={() => setPage( page - 1)} disabled={isFetching || page <= 1 }> Back </button>
            <button className="btn btn-primary" onClick={() => setPage( page + 1)} disabled={isFetching || page === maxPages }> Next </button>
        </div>
        </div>
        </div>   
    )
}