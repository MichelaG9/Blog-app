import { Card, ListGroup, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBox = ({items, title, path_data}) => {

    const getLink = (item) => {
        if(path_data === "categories"){
            return `/${path_data}/${item.title.replace(/\s+/g, '').toLowerCase()}`
        } else {
            return `/${path_data}/${item.id}`
        }
    }

    return ( 
        <Card className="mt-5 shadow-sm bg-body rounded">
            <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h5 className="m-0">{ title }</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-1">
                        <ListGroup id="categories-list" variant="flush">
                            {items.map((item) => (
                                <Link to={getLink(item)} key={item.id} className="text-decoration-none text-dark">
                                    <ListGroup.Item >{item.title}</ListGroup.Item>
                                </Link>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Accordion>
        </Card>
     );
}
 
export default SideBox;