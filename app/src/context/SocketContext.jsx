import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";


const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const { currentUser } = useSelector((state) => state.user);
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		if (currentUser) {
			const socket = io("https://localhost:5173", {
				query: {
					userId: currentUser?._id,
				},
				rejectUnauthorized: false, // Ignore SSL certificate errors
			});


			setSocket(socket);

			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [currentUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
