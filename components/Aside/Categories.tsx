"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getData } from '@/utils/Fetchs';

interface CategoryCount {
  title: string;
  count: number;
}

const Categories: React.FC = () => {
  const [categoriesWithCounts, setCategoriesWithCounts] = useState<CategoryCount[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts: PostInterfaces[] = await getData();

        const categoryCounts: { [key: string]: number } = {};

        posts.forEach(post => {
          post.categories.forEach(category => {
            categoryCounts[category.title] = (categoryCounts[category.title] || 0) + 1;
          });
        });

        const categories = Object.entries(categoryCounts).map(([title, count]) => ({
          title,
          count
        }));

        setCategoriesWithCounts(categories);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='w-full flex flex-col gap-4 items-start pt-4 pl-2 text-skin1 '>
      {categoriesWithCounts.map(category => (
        <Link key={category.title} className='bg-skin3 py-1 px-4 rounded-sm' href={`/Blog/${category.title.toLowerCase()}`}>
          {`${category.title} (${category.count})`}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
