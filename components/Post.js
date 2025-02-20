import React from "react";
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon,EmojiHappyIcon } from "@heroicons/react/outline";

export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt="" />

      {/* Post Footer */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* Post Footer */}

      <p className="p-5 trauncate"><span className="font-bold mr-2">{username}</span>{caption}</p>
      {/* Post Input box*/}
        <form className="flex item-center p-4">
              <EmojiHappyIcon className="h-7"/>
              <input className="boder-none flex-1 focus:ring-0"type="text" placeholder="Enter your comment..."/>
              <botton className="text-blue-400 font-bold">Post</botton>
        </form>


    </div>
  );
}
