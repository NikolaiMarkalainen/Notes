import { useAppDispatch, useAppSelector } from "../hooks";
import { clearMessage } from "../state";
import { NotificationContent } from "../types";



export const Notification = () => {
    const message = useAppSelector(state => state.notification.message);
    const loggeduser = useAppSelector(state => state.login);
    const dispatch = useAppDispatch();
    
    console.log(message);
    console.log(loggeduser);
    if (!message) {
        return null;
    };

    if (message !== undefined) {
        setTimeout(() => {
            dispatch(clearMessage());
        }, 5000);
    }

        return(
          <div className="notification">
            <div className="notification-message">{message}</div>
          </div>
        );
};

