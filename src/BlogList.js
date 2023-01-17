
import {Link} from 'react-router-dom';
function BlogList ({blogs,title, handleDelete}) {




    return(
        <div className="blog-list">

            <h2>{title}</h2>
            {
           blogs.map(blog => {
            return (<div className='blog-preview' key={blog.id}>
                {/* <p>{Object.values(blog)}</p> */}
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.Name}</h2>
                <p>{blog.Personality}</p>
                </Link>
            </div>

            )
           })}
        </div>
            
    )
}

export default BlogList;