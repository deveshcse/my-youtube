import React from "react";

const VideoCard = ({ info }) => {
//   console.log("info:", info);

const { snippet, statistics } = info;
  //   console.log(snippet, statistics);
const { channelTitle, title, thumbnails } = snippet;
  // console.log(channelTitle, title, thumbnails);

  return (
    <div className="w-80">
    <div className=" p-2 m-2 shadow-lg rounded-lg bg-white">
      {/* Video Thumbnail */}
      <div>
        <img
          className="rounded-lg w-full"
          alt="thumbnail"
        src={thumbnails.medium.url}
        />
      </div>

      {/* Video Title and Channel Info */}
      <div className="m-3 h-20">
        <div className="font-semibold text-base line-clamp-2">{title}</div>
        <div className="text-sm text-gray-600">{channelTitle}</div>
        <div className="text-sm text-gray-600">
          {statistics.viewCount} views
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoCard;
