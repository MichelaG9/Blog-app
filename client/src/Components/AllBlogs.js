import { Row, Spinner } from 'react-bootstrap';
import useFetch from "../useFetch";
import BlogCard from './BlogCard';

const AllBlogs = () => {

    const { data: blogs, isPending, error } = useFetch('https://mg-blog-app.herokuapp.com/api/blogs');

    return ( 
        <div className="allblogs-detail">
            { error && <div>{ error }</div> }
            { isPending && 
                <div style={{ width: '100%', height: '90vh' }} className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                </div>
            }

            { blogs && <Row className="p-5">
                {blogs.slice(0).reverse().map((blog) => (
                    <BlogCard blog={blog} />
                ))}
                </Row>
            }
        </div>
     );
}
 
export default AllBlogs;