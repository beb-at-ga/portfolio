import React from 'react';
// import Admin from '../Admin/Admin';
// import Auth from '../Admin/Auth';


const Blog = (props) => {
  
  let articles = props.articles.map((a, idx) => {
    return (
      <li key={idx}>
      {a.title}
      <p className="subtext">{a.body}</p>
      </li>
    )
  })
 
  return (
    <div>
      <ul>
        {articles}
      </ul>
    </div>
  )
}

export default Blog;