import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../useFetch';
import axios from 'axios';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [categories, setCategories] = useState('House plants');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const {data: items} = useFetch('https://mg-blog-app.herokuapp.com/api/categories');

    const handleSubmit = async function(e) {
        e.preventDefault();

        let img = Math.floor((Math.random() * 8) + 1);
        let score = 0;
        let category = categories.replace(/\s+/g, '').toLowerCase();
        const blog = { title, body, category, img, score};

        setIsPending(true);

        axios.post('https://mg-blog-app.herokuapp.com/api/blogs', blog)
        .then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <Row className="create">
            <Col sm={12}><h2 className="text-center pt-5 pb-3">Create a new blog</h2></Col>
            <Col md={{ span: 6, offset: 3 }} sm={12}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1" className="m-0 p-3">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Form.Control 
                            required 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1" className="m-0 p-3">
                        <Form.Label column sm={4}>Blog body:</Form.Label>
                        <Form.Control 
                            required 
                            as="textarea" 
                            rows={4}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </Form.Group>

                    { items && <Form.Group as={Row} className="m-0 p-3">
                        <Form.Label column sm={4}>Categories</Form.Label>
                        <Form.Control 
                            as="select"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                        >
                            {items.map((item) => (
                                    <option key={`cat-${item.id}`} >{item.title}</option>
                                ))}
                        </Form.Control>
                    </Form.Group>}

                    <Form.Group as={Row} className="ml-3 p-3">
                            { !isPending && <Button type="submit">Add blog</Button>}
                            { isPending && <Button disabled type="submit">Adding blog...</Button>}
                    </Form.Group>

                </Form>
            </Col>
        </Row>
     );
}
 
export default Create;