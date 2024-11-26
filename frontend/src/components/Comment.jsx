import Image from "./Image";

const Comment = () => {
  return (
    <div className="comment-card p-4 bg-slate-50 rounded-xl mb-8">
      <div className="comment-header flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="user-img w-10 h-10 rounded-full object-cover"
          alt="User Image"
        />
        <span className="username font-medium">Jhon Doe</span>
        <span className="timestamp text-sm text-gray-500">2 days ago</span>
        <span className="delete-link text-xs text-red-300 hover:text-red-500 cursor-pointer">
          delete
        </span>
      </div>
      <div className="comment-body mt-4">
        <p className="comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </div>
  );
};

export default Comment;
