import { RiWechatLine } from "react-icons/ri";

const NoChatSelected = ({user}) => {
  
  return (
    <div className="w-full flexCenter flex-col gap-10 p-2 text-gray-100">
      <p>Welcome {user.fullName}</p>
      <p>Select a chat to start messaging</p>
      <RiWechatLine  className="scale-[5] mt-4"/>
    </div>
  )
}

export default NoChatSelected