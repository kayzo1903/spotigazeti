import Link from 'next/link';
import React from 'react'

interface Asidecard {
    catTitle: string 
    title : string 
    author : string 
    date : any 
    slug : string
}

const Asidecard: React.FC<Asidecard> = ({catTitle , title , author , date , slug}) => {
  return (
          <Link className="transition-all duration-500 bg-text py-2 px-1 rounded-lg hover:scale-105" href={`/Blog/Article/${slug}`}>
            <p className="text-skin2">{catTitle}</p>
            <h6 className="text-sm text-gray-600 font-semibold">{title}</h6>
            <p className="text-xs text-gray-600">
              by <span className="font-thin">{author}</span>{" "}
              <span>
                {date ? new Date(date).getDate() : "N/A"}/
                {date ? new Date(date).getMonth() + 1 : "N/A"}/
                {date ? new Date(date).getFullYear() : "N/A"}
              </span>
            </p>
          </Link>
  )
}

export default Asidecard