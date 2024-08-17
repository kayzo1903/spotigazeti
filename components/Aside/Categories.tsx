import React from 'react';
import Link from 'next/link';
import { getData } from '@/utils/Fetchs';


const Categories = async () => {
  const posts: PostInterfaces[] = await getData();

  const categoryCounts: { [key: string]: number } = {};

  posts.forEach(post => {
    post.categories.forEach(category => {
      categoryCounts[category.title] = (categoryCounts[category.title] || 0) + 1;
    });
  });

  const categoriesWithCounts = Object.entries(categoryCounts).map(([title, count]) => ({
    title,
    count
  }));

  return (
    <div className='w-full flex flex-col gap-4 items-start pt-4 pl-2 text-skin1'>
      {categoriesWithCounts.map(category => (
        <Link key={category.title} href={`/Blog/${category.title.toLowerCase()}`}>
          {`${category.title} (${category.count})`}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
