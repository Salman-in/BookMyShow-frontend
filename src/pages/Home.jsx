import CarouselComponent from '../components/Carousel';
import Movies from './Movies';

function Home() {
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center text-white py-2 bg-dark">
        <div>Movies</div>
        <div>Streams</div>
        <div>Events</div>
        <div>Plays</div>
        <div>Sports</div>
      </div>
      <CarouselComponent />
      <Movies />
    </div>
  );
}

export default Home;
