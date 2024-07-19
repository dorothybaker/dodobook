import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Share from "./Share";
import { useEffect } from "react";
import { getPosts, getTimelinePosts } from "../../actions/postAction";
import { useLocation } from "react-router-dom";
import PostSkeleton from "../../skeletons/post.skeleton";

function Posts({ userPosts, userId, setPostNumber }) {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.postReducer);
  const { userInfo } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    if (userPosts) {
      dispatch(getTimelinePosts(userId));
      setPostNumber(posts.length);
    } else {
      dispatch(getPosts());
    }
  }, [posts.length, userId]);

  const { pathname } = useLocation();

  console.log(posts);

  return (
    <div className="py-2 flex flex-col gap-5">
      {pathname.startsWith("/profile") ? (
        userId === userInfo._id && <Share myShare={userPosts} />
      ) : (
        <Share myShare={userPosts} />
      )}
      <div className="flex flex-col gap-4">
        {loading ? (
          <PostSkeleton />
        ) : (
          posts?.map((post, id) => <Post post={post} key={id} />)
        )}
      </div>
    </div>
  );
}

export default Posts;
