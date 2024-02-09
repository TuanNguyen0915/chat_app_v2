import { useEffect, useState } from "react";
import ConversationCard from "./ConversationCard";

import { useAuthContext } from "../../context/AuthContext";
import { getAllUsers } from "../../hooks/conversation.hook";

const Conversations = () => {
  const [conversations, setConversations] = useState(null);
  const { authUser } = useAuthContext();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllUsers(authUser.token);
      setConversations(data.users);
    };
    fetchData();
  }, [authUser]);

  return (
    <div className="flex-1 overflow-auto">
      {/* <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard />
      <ConversationCard /> */}
      {conversations?.map((conversation) => (
        <ConversationCard key={conversation._id} user={conversation}/>
      ))}
    </div>
  );
};

export default Conversations;
