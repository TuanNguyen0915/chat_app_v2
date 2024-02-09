import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { logout } from "../../hooks/auth.hook";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };
  return (
    <div className="flex flex-col border-r border-slate-600 p-2 pr-8 ">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <div className="my-4 flex items-center">
        <BiLogOut
          onClick={handleLogOut}
          className="scale-[2] duration-500 hover:scale-[2.5] hover:text-white"
        />
      </div>
    </div>
  );
};

export default Sidebar;
