import {Card, Container} from "react-bootstrap"
const Kegiatan = (props) => {

    return(
        <div>
            <div className="container">
            <Card className="my-3">
                <Card.Img variant="top" className="img-kegiatan" src={props.kegiatan} />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}

export default Kegiatan;