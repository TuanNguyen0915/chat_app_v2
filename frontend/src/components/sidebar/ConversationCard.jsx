const ConversationCard = () => {
  return (
    <>
      <div className="group flex cursor-pointer items-center gap-5 rounded-md p-2 duration-500 hover:bg-sky-500">
        {/* AVATAR */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex items-center duration-300 group-hover:text-white">
          <p>Tuan Nguyen</p>
        </div>
      </div>
    </>
  );
};

export default ConversationCard;
