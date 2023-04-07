import { useAppSelector } from '../hooks';
import { useGetUserSpecificNotesQuery } from '../state';
import "../styles/homepage.css"

export const Home =() => {

    const user = useAppSelector(state => state.login);
    const userId = user?.user?.id;
    if(userId){
        const {data: notes} = useGetUserSpecificNotesQuery(userId);
        console.log(notes);
        if(notes){
            return(
                <div className='home-container'>
                    <div className='text-container'>
                        <h1 className='homepage-title'> Homepage </h1>
                        <div className='text-contents'>Your notes: </div>
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