import { Button } from 'react-bootstrap';
import BlogCard from './BlogCard';

const BlogScroll = ({blogs, container}) => {

    return (
        <div className="position-relative">
            <div id="blog-list-container">
                <div id={container} className="d-flex overflow-auto position-relative"  onScroll={() => document.getElementById(`${container}`).scrollLeft ? document.getElementById(`left-${container}`).style.visibility = 'visible' : document.getElementById(`left-${container}`).style.visibility = 'hidden'}>
                    {blogs.map((blog) => (
                        <BlogCard blog={blog} />
                    ))}
                </div>
            </div>
            <div id="controller-container" className="position-absolute w-100 h-50">
                <div className="button-container">
                    <div>
                        <Button className="btn-sm rounded-circle" block={false} variant="light" id={"left-" + container} onMouseDown={() => document.getElementById(`${container}`).scrollBy(-(document.querySelector('.card-container').offsetWidth), 0) } >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </Button>
                    </div>
                    <div>
                        <Button className="btn-sm rounded-circle" block={false} variant="light" id={"right-" + container} onMouseDown={() => document.getElementById(`${container}`).scrollBy(document.querySelector('.card-container').offsetWidth, 0) } >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default BlogScroll;