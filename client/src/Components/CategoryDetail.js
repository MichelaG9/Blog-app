import { useParams } from "react-router-dom";
import { Row, Spinner } from 'react-bootstrap';
import useFetch from "../useFetch";
import BlogCard from './BlogCard';


const CategoryDetail = () => {

    const { category } = useParams();

    const { data: blogs, isPending, error } = useFetch('https://mg-blog-app.herokuapp.com/api/blogs');

    return ( 
        <div className="category-detail">
            { error && <div>{ error }</div> }
            { isPending && 
                <div style={{ width: '100%', height: '90vh' }} className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                </div>
            }

            { blogs && <Row className="p-5">
                {blogs.filter(blog => blog.category === category).map((blog) => (
                    <BlogCard blog={blog} />
                ))}
                </Row>
            }
        </div>
     );
}
 
export default CategoryDetail;