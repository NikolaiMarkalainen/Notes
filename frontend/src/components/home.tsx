import { useAppSelector } from '../hooks';
import { useGetUserSpecificNotesQuery } from '../state';
import "../styles/homepage.css"

export const Home =() => {

    const user = useAppSelector(state => state.login);
    const userId = user?.user?.id;
    console.log("USER ID",userId)
    if(userId){
        const {data: notes} = useGetUserSpecificNotesQuery(userId);
        console.log(notes);
        if(notes){
            return(
                <div className='home-container'>
                    <div className='text-container'>
                        <h1 className='homepage-title'> Homepage </h1>
                    <h1 className='card-title'>Your notes:</h1>
                    <div className="card-container">
                    {notes.map(note => (
                        <div className = "card"key={note.id}>
                            <h5 className="card-title">{note.title}</h5>
                            <h6 className="card-subtitle">By {note.author}</h6>
                            <p className="card-text"> {note.content}</p>
                            <button className="btn btn-primary card-button"> {note.teamId}</button>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
        <h1>Homepage</h1>
        
        </div>
    )
}