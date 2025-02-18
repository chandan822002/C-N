import React, { useEffect, useState } from "react"; // Ensure useState is included since you're using it
import AllChats from "../components/Home/AllChats";
import ChatBox from "../components/Home/ChatBox";
import { io } from "socket.io-client";
import * as types from "../redux/appReducer/actionType";
import { useDispatch } from "react-redux";

const ENDPOINT = "https://chatc.onrender.com";

const Home = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const socket = io(ENDPOINT);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("chat-app-login-user-data"));

    socket.on("connect", () => {
      setIsLoading(false);
    });

    socket.emit("setup", userData);
    socket.on("connection", () => setSocketConnected(true));

    dispatch({ type: types.WEB_SOCKET_CONNECTED, payload: socket });

    // Adding 'dispatch' as a dependency to avoid stale closures
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-between h-screen max-h-full">
      <div className="w-full h-full lg:w-1/4 bg-primary-400 hidden lg:block">
        {isLoading ? (
          <p>Loading...</p> // Optional, but you can put a loading message here
        ) : (
          <AllChats />
        )}
      </div>
      <div className="w-full h-full lg:w-3/4 bg-primary-400 p-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ChatBox />
        )}
      </div>
    </div>
  );
};

export default Home;
