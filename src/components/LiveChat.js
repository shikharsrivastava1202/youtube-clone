import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.messages);

  //API Polling
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("livechat");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[430px] flex flex-col-reverse ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll ">
        <div>
          {chats.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" flex flex-col w-full p-2 ml-2 border-b-2 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Varun",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-auto bg-slate-400 px-2"
          placeholder="Type here..."
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="w-auto px-2 m-2 bg-red-500">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
