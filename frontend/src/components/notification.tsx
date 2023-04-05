import { useAppDispatch, useAppSelector } from "../hooks";
import { clearMessage } from "../state";



export const Notification = () => {
    const message = useAppSelector(state => state.notification.message);
    const dispatch = useAppDispatch();

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

