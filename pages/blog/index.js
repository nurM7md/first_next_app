import Link from 'next/link';
import React from 'react'



export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9");
  const data = await res.json()
  return {
    props: { posts: data },
  };
}


const Blog = ({ posts }) => {
  return (
    <div className='container'>
      <div className='row'>
        <h1>Blog</h1>
        <hr />
      </div>

      <div className='row'>
        {posts.map((post) => (
          <div className='col-12 col-md-4' key={post.id}>
            <div className="card mb-4">
              <img src={`https://source.unsplash.com/720x400/?butterfly`} 
              className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Some quick example text to build on the card 
                title and make up the bulk of the card's content.</p>
                <Link legacyBehavior href={`/blog/${post.id}`}>
                  <a className="btn btn-primary">Go somewhere</a>
                </Link>
              </div>
            </div>

          </div>
        ))
        }

      </div>
    </div>
  )
}

export default Blog