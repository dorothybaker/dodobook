import { useState } from "react";
import { GoHeart, GoHeartFill, GoShareAndroid } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
import { useSelector } from "react-redux";
import { likePost } from "../../api/postRequest";

import moment from "moment";

import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const { userInfo } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(post.likes.includes(userInfo._id));
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(post._id, userInfo._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const navigate = useNavigate();

  return (
    <div className="p-3 bg-white/60 rounded-xl shadow-sm flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div>
          <img
            src={
              post?.user?.profilePic ||
              "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
            }
            alt=""
            className="w-[35px] h-[35px] object-cover rounded-full"
          />
        </div>
        <div
          className="flex flex-col justify-between cursor-pointer"
          onClick={() => navigate(`/profile/${post?.user?._id}`)}
        >
          <h1 className="text-sm">
            {post?.user?.firstName} {post?.user?.lastName}
          </h1>
          <span className="text-gray-500 text-xs">
            {moment(post?.createdAt).fromNow()}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {post.description && (
          <p className="text-[15px] leading-6">{post.description}</p>
        )}
        {post.image && (
          <img src={post.image} className="max-h-[320px] w-full object-cover" />
        )}
        {post.video && (
          <video
            src={post.video}
            controls
            className="max-h-[370px] w-full"
          ></video>
        )}
      </div>
      <div className="flex sm:gap-4 gap-3 items-center">
        <div className="flex gap-1 items-center text-xs">
          {liked ? (
            <GoHeartFill
              size={20}
              className="text-primary cursor-pointer"
              onClick={handleLike}
            />
          ) : (
            <GoHeart
              size={20}
              className="text-primary cursor-pointer"
              onClick={handleLike}
            />
          )}
          <span className="text-gray-500">{likes} likes</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <LiaComment size={20} className="text-primary" />
          <span className="text-gray-500">Comment</span>
        </div>
        <div className="flex gap-1 items-center text-xs">
          <GoShareAndroid size={19} className="text-primary" />
          <span className="text-gray-500">Share</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
