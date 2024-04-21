'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BlogList: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Annotation Use Modern LLMS',
      description: 'The project include the step by step guideline that how one person can annotation his/her data using the Large Language model.',
      image: '/annotation.png',
      slug: 'https://blog.stackademic.com/outputintroduction-to-data-annotation-using-modern-llms-and-tools-b283d86a94b1',
    },
    {
      id: 2,
      title: 'Power Bi',
      description: 'The blog explains the working of PowerBI tool and a dashboard of the test dataset. The dataset of Homicide by Countries.',
      image: '/powerbidash.jpg',
      slug: 'https://medium.com/@baigabdulrehman21/exploring-datasets-using-power-bi-1c7b7c211b8b',
    },
    {
      id: 3,
      title: 'Understanding LIDA',
      description: 'This blog explores the one of the renowned tool LIDA provided by Microsoft, used for the Visualization of the CSV and JSON file',
      image: '/lida.png',
      slug: 'https://medium.com/stackademic/understanding-lida-a-complete-setup-to-data-visualization-f81ffa1748e8',
    },
  ];

  return (
    <div id='blogs' className="flex flex-col items-center justify-center min-h-screen w-full h-full z-40">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 mb-8"
      >
        My Blogs
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 max-w-md"
          >
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={400}
                className="w-full h-full object-fit"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-300 mb-4">{blog.description}</p>
            <a href={`${blog.slug}`} className="inline-block">
              <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-300">
                Read More
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;