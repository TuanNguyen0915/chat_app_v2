import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { BiLogOut } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-slate-600 p-2 pr-8 ">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <div className="mt-8 flex items-center">
        <BiLogOut className="scale-[2] duration-500 hover:scale-[2.5] hover:text-white" />
      </div>
    </div>
  );
};

export default Sidebar;
