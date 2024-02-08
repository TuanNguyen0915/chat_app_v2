import MessageCard from "./MessageCard";

const Messages = () => {
  return (
    <div className="flex-1 overflow-auto p-4">
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </div>
  );
};

export default Messages;
