import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponent() {
    return (
        <Carousel
            className="custom-carousel"
            controls={true}
            indicators={false}
            interval={3000}
            style={{ width: '80%', margin: 'auto',paddingTop: '20px' }}
        >
            {[
                "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
                "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743666109183_1240x300travisscott2025regionalnewdelhipresale.jpg",
                "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743155482801_madhuvanfestwebregions.jpg"
            ].map((src, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block mx-auto rounded"
                        src={src}
                        alt={`Slide ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;
