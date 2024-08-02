import React,{ useEffect,useState } from "react";
import './BlogList.css'
const BlogList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('/Post.json')
          .then((response) => response.json())
          .then((data) => setPosts(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  return (
       <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="blog-posts">
        {posts.map((post) => (
          <li key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p className="blog-author">By {post.author} on {post.date}</p>
          </li>
        ))}
        </div>
    </div>
    
  )
}

export default BlogList
