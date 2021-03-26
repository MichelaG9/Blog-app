import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from './Images'

const BlogCard = ({blog}) => {

    return ( 
        <Col xs={12} sm={12} md={6} className="card-container mb-3" key={ blog.id } >
            <Card className="shadow-sm p-2 bg-body rounded">
                <Card.Img variant="top" src={images.filter(image => image.id === blog.img)[0].src} />
                <Card.Body>
                    <Link to={`/blogs/${blog.id}`} className="text-decoration-none text-dark">
                        <Card.Title>{ blog.title }</Card.Title>
                    </Link>
                    <Card.Text className="text-truncate">
                        { blog.body }
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{ "#" + blog.category }</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
     );
}
 
export default BlogCard;