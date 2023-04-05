import { useAppSelector } from '../hooks';
import { useGetUserSpecificNotesQuery } from '../state';
import '../styles.css';


export const Home =() => {

    const user = useAppSelector(state => state.login);
    const userId = user?.user?.id;
    if(userId){
        const {data: notes, isFetching, isLoading} = useGetUserSpecificNotesQuery(userId);
        console.log(notes);
        if(notes){
            return(
                <div>
                    <h1> Homepage </h1>
                    <div>Your notes: </div>
                    <div>
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