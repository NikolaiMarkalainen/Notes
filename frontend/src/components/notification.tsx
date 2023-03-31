import { useAppSelector } from "../hooks";
import { NotificationContent } from "../types";



export const Notification = () => {
    const message = useAppSelector(state => state.notification.message);
    console.log(useAppSelector(state => state));
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
      }
    
        return(
            <div style={style}> 
                {message}
            </div>
        );
};

