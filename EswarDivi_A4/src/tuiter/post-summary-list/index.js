import React from 'react';
import PostSummaryItem from './post-summary-item';
import postData from './posts.json';

const PostSummaryList = () => {
    return (
        <ul className='list-group'>
            {
                postData.map(post => <PostSummaryItem key={post.id} post={post}/>)
            }
        </ul>
    );
};

export default PostSummaryList;