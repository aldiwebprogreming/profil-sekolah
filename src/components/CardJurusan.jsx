import {Card, Button} from "react-bootstrap";
import "../css/style.css";
const Cardjurusan = (props) => {

    return(

        <div>
            <Card  className="text-center my-3">
            <Card.Img variant="top" src={props.image}  className="imgJurusan" />
            <Card.Body>
                <Card.Title>{props.jurusan}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="success">Lihat Detail</Button>
            </Card.Body>
            </Card>
        </div>
    );
}

export default Cardjurusan;