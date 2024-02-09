import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {authUser} = useAuthContext()
  const user = authUser.user

  const noChat = true;

  if (noChat) {
    return (
      <div className="flexCenter md:min-w-[450px]">
        <NoChatSelected user={user} />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:min-w-[450px]">
      <Header />
      <Messages />
      <div className="w-full p-2">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
