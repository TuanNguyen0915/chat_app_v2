
import { BsSend } from "react-icons/bs";

const MessageInput = () => {

  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-lg bg-slate-600 px-4 py-2 opacity-60 duration-500 hover:opacity-100 focus:opacity-100">
      <input
        type="text"
        placeholder="Send a message"
        className="flex-1 bg-transparent outline-none"
      />
      <button>
        <BsSend className="scale-150 duration-500 hover:text-white" />
      </button>
    </div>
  );
};

export default MessageInput;
