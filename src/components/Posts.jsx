import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

        setPosts(data);
    }

    useEffect(() => {
       // api call
       fetchPosts();
       /* eslint-disable-next-line */
    }, []);

    return (
        <div>
          {posts.map(post => <div key={post.id} style={{border:'1px solid black', marginBottom:'5px'}}>{post.title}</div>)}  
        </div>
    );
}

export default Posts;
