import React from 'react'

const Blog = ({ title, content }) => {
  return (
   <>
   // components/Blog.js
   <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }}>{content}</div>
    </div>


export default Blog;

   </>
  )
}

export default Blog