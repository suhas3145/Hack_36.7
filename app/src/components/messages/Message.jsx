import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { useSelector } from "react-redux";


const Message = ({ message }) => {
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === currentUser._id;
    const profilePicture = fromMe ? currentUser.profilePicture : selectedConversation?.profilePicture;
    const formattedTime = extractTime(message.createdAt);


    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img alt='Tailwind CSS chat bubble component' src={profilePicture} />
                    </div>
                </div>
                <div className={`chat-bubble text-white pb-2`}>{message.message}</div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
            </div>
        </div>
    )
}

export default Message
