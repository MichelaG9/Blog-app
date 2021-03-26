import BlogScroll from './BlogScroll';
import useFetch from '../useFetch';
import { Col, Spinner } from 'react-bootstrap';
import SideBox from './SideBox';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('https://mg-blog-app.herokuapp.com/api/blogs');
    const {data: categories} = useFetch('https://mg-blog-app.herokuapp.com/api/categories');
    const {data: top} = useFetch('https://mg-blog-app.herokuapp.com/api/blogs');


    return ( 
        <div className="row">
            { error && <div>{ error }</div> }
            { isPending && 
                <div style={{ width: '100%', height: '90vh' }} className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                </div>
            }

            { categories && 
                <Col xs={{span: 6}} sm={4} md={3}>
                    <SideBox items={categories} title="Categories" path_data="categories" />
                </Col>
            }

            { blogs && blogs.length > 0 && 
                <Col xs={12} sm={8} md={9}>
                    <h4 className="pl-3 mt-5">Latest posts</h4>
                    <BlogScroll blogs={blogs.slice(0).reverse()} container="latest" /> 
                </Col>
            }

            { top && top.length > 0 && 
                <Col xs={{span: 6}} sm={4} md={3}>
                    <SideBox items={top.sort((a, b) => parseInt(b.score) - parseInt(a.score)).slice(0, 5)} title="Top 5" path_data="blogs" />
                </Col>
            }

            { top && top.length > 0 && 
                <Col xs={12} sm={8} md={9}>
                    <h4 className="pl-3 mt-5">Popular posts</h4>
                    <BlogScroll blogs={top.sort((a, b) => parseInt(b.score) - parseInt(a.score))} container="top" />
                </Col>
            }

        </div>
     );
}

export default Home;