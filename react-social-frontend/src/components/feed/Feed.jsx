import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";

import "./feed.css";
import { Posts } from "../../dummyData";

const Feed = () => {
  const postArr = Posts.map((p) => <Post key={p.id} post={p} />);
  // console.log(postArr);
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {postArr}
      </div>
    </div>
  );
};

export default Feed;
