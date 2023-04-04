import { useAppDispatch, useAppSelector } from "../hooks";
import { clearMessage } from "../state";
import { NotificationContent } from "../types";



export const Notification = () => {
    const message = useAppSelector(state => state.notification.message);
    const dispatch = useAppDispatch();
    console.log(message);
    if (!message) {
        return null;
      }
    let style= {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        display: 'block'
    };  
    if (message !== undefined) {
        style = {
          ...style,
          display: "block", // set display to block if message is not undefined
        };
        setTimeout(() => {
            dispatch(clearMessage());
        }, 5000);
      
      }

        return(
            <div style={style}> 
                {message}
            </div>
        );
};

