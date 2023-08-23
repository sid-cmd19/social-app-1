import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import "./profile.css";

const Profile = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src='assets/post/3.jpeg'
                alt=''
                className='profileCoverImg'
              />
              <img
                src='assets/person/7.jpeg'
                alt=''
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Sid</h4>
              <span className='profileInfoDesc'>Description Sid</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
