'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';

const Blog = () => {
  const [blog, setBlog] = useState({ title: "Generating the Blog....", content: "" });
  const params = useSearchParams();
  const prompt = params.get("prompt");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // console.log("params: " + prompt);
        let response = await fetch("/api/generate?prompt=" + prompt);
        let data = await response.json();
        setBlog(JSON.parse(data.json));
        // return;
      } catch (error) {
        setBlog({title:"",content:"<h1>Error fetching blog....</h1> <br/>Please try again...."})
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [prompt]);

  return (
<>
<Header/>
    <div className="w-10/12 space-y-12 mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title!="Generating the Blog...."?"":blog.title}</h1>
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
    </>
  );
};

export default Blog;
