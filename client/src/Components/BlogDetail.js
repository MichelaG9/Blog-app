import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import { Container, Card, Button, Col, Row, Image, Spinner } from 'react-bootstrap';
import images from './Images'
import axios from "axios";
import { useState } from "react";

const BlogDetail = () => {

    const { id } = useParams();
    const [ likes, setLikes ] = useState(0);
    const { data: blog, isPending, error } = useFetch('https://mg-blog-app.herokuapp.com/api/blogs/' + id);
    const history = useHistory();

    const handleDelete = async function() {
        axios.delete('https://mg-blog-app.herokuapp.com/api/blogs/' + blog.id)
        .then(() => {
            history.push('/');
        })
    }

    const handleLike = () => {
        axios.put('https://mg-blog-app.herokuapp.com/api/blogs/' + blog.id)
        .then((res) => {
            setLikes(res.data[0].score);
        })
    }

    return ( 
        <Container fluid className="blog-detail">
            { error && <div>{ error }</div> }
            { isPending && 
                <div style={{ width: '100%', height: '90vh' }} className="d-flex justify-content-center align-items-center">
                    <Spinner animation="grow" />
                </div>
            }

            { blog && (
                <Row className="justify-content-center">
                    <Col xs="auto" className="mt-5 px-0">
                        <Image src={images.filter(image => image.id === blog.img)[0].src} />
                    </Col>
                    <Col xs={12} md={6} lg={8} className="mt-5 pr-0">
                        <Card>
                            <Card.Body className="text-left">
                                <Card.Title className="p-2">{ blog.title }</Card.Title>
                                <Card.Text className="px-2" >{ blog.body }</Card.Text>
                                <Button variant="success" className="m-3" onClick={handleLike}>
                                    <div className="d-flex align-items-center">

                                        { likes > 0 && <span className="pr-2" id="likes">{ likes }</span>}
                                        { likes === 0 && <span className="pr-2" id="likes">{ blog.score }</span>}

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z"/>
                                        </svg>
                                        
                                    </div>
                                </Button>
                                <Button variant="danger" className="m-3" onClick={handleDelete}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
     );
}
 
export default BlogDetail;