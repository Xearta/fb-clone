import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic='https://avatars0.githubusercontent.com/u/1683791?s=460&u=abccb06c384728e7fda2185195a8389600db7c76&v=4'
        message='WOW this works!'
        timestamp='This is a timestamp'
        username='Tanner Townsend'
        image='https://code.org/shared/images/social-media/codeorg2019_social.png'
      />

      <Post
        profilePic='https://avatars0.githubusercontent.com/u/1683791?s=460&u=abccb06c384728e7fda2185195a8389600db7c76&v=4'
        message='WOW this works!'
        timestamp='This is a timestamp'
        username='Tanner Townsend'
      />
    </div>
  );
};

export default Feed;
