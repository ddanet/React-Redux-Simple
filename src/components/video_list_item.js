import React from 'react';

// const VideoListItem = (props) => {  // this is the same as the below
const VideoListItem = ({video, onVideoSelect}) => {

    const title = video.snippet.title;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="vidoe-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;