import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";

import "./post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  // console.log(Users);
  // const filteredArr = Users.filter((user) => user.id === 1);
  // console.log(filteredArr[0].username);

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=''
              className='postProfileImg'
            />
            <span className='postUsername'>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={post.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src='assets/like.png'
              alt=''
              onClick={likeHandler}
            />
            <img
              className='likeIcon'
              src='assets/heart.png'
              alt=''
              onClick={likeHandler}
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;