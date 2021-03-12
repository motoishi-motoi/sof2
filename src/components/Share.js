import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    HatenaShareButton,
    HatenaIcon,
    LineShareButton,
    LineIcon
  } from 'react-share';

const Share = (props) => {
    return (
        <div className ="share-box">
            <div className = "share-button">
                <p className = "share-caption">SHARE</p>
                <TwitterShareButton url={props.url} title={props.title}>
                    <TwitterIcon size={42} round />
                </TwitterShareButton>
                <FacebookShareButton url={props.url} quote={props.title}>
                    <FacebookIcon size={42} round />
                </FacebookShareButton>
                <HatenaShareButton url={props.url} title={props.title}>
                    <HatenaIcon size={42} round />
                </HatenaShareButton>
                <LineShareButton url={props.url} title={props.title}>
                    <LineIcon size={42} round />
                </LineShareButton>
            </div>
        </div>
    );
  }

export default Share;