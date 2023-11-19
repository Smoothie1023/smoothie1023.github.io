import React, {Children} from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LineShareButton,
    RedditShareButton,
    HatenaShareButton,
    FacebookIcon,
    XIcon,
    LineIcon,
    RedditIcon,
    HatenaIcon,
    FacebookShareCount,
    RedditShareCount,
    HatenaShareCount
} from 'react-share';

const Share = props => {
    const articleTitle = props.title;
    const articleUrl = props.url;
    const articleDescription  = props.description;
    const iconSize = 40;

    return (
        <div className="share">
            <h3>Share!</h3>
            <TwitterShareButton url={articleUrl} title={articleTitle}>
                <XIcon size={iconSize} round />
            </TwitterShareButton>
            <LineShareButton url={articleUrl} title={articleTitle}>
                <LineIcon size={iconSize} round />
            </LineShareButton>
            <FacebookShareButton url={articleUrl} quote={articleDescription}>
                <FacebookIcon size={iconSize} round />
                <FacebookShareCount url={articleUrl} />
            </FacebookShareButton>
            <RedditShareButton url={articleUrl} title={articleTitle}>
                <RedditIcon size={iconSize} round />
                <RedditShareCount url={articleUrl} />
            </RedditShareButton>
            <HatenaShareButton url={articleUrl} title={articleTitle}>
                <HatenaIcon size={iconSize} round />
                <HatenaShareCount url={articleUrl} />
            </HatenaShareButton>
        </div>
    )
}
export default Share;