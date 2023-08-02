import React from 'react'
import css from "./css/PostItem.module.css";

function PostItem({savedPosts}) {
  
  return (
    <>
        {savedPosts.map(post => {
            const {title, name, image, description} = post
            return <div key={image} className={css.SearchItem}>
                <p>Title: {title}</p>
                <p>Artist: {name} </p>
                <p><img alt={description} src={image} /></p>
                <p>Description: {description}</p>
            </div>
            }
        )} 
    </>
  )
}

export default PostItem