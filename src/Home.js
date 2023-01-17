/* eslint-disable no-unused-vars */
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
  const {data: blogs, isPendeing, error } = useFetch('http://localhost:8000/blogs')

  
        return ( 
        <div className="home">
          {error && <div>{error}</div>}
          {isPendeing && <div>Loading.......</div>}   
          {blogs && <BlogList blogs={blogs} title='All Blogs'  /> }    
        </div>
     );
}
 
export default Home;