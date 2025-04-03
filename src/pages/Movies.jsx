import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";

function Movies() {
  const movies = [
    { 
      name: "L2: Empuraan", 
      genre: "Action/Crime/Thriller", 
      rating: "8.1/10", 
      votes: "92.7K Votes", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICA5Mi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00305698-jquqhbdnvv-portrait.jpg",
      isLiked: false
    },
    { 
      name: "Sikandar", 
      genre: "Action/Drama", 
      rating: "6.3/10", 
      votes: "19.1K Votes", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICAxOS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-ujrgqmlwjv-portrait.jpg",
      isLiked: false
    },
    { 
      name: "A Minecraft Movie", 
      genre: "Action/Animation/Comedy", 
      rating: "45.6K Likes", 
      votes: "", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDUuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410687-ybftydyhgr-portrait.jpg",
      isLiked: true
    },
    { 
      name: "Middle Class Family", 
      genre: "Drama/Family/Romantic", 
      rating: "9.6/10", 
      votes: "1.4K Votes", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAxLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429365-eygyrmwnnb-portrait.jpg",
      isLiked: false
    },
    { 
      name: "Veera Dheera Sooran - Part 2", 
      genre: "Action/Thriller", 
      rating: "8.5/10", 
      votes: "17.5K Votes", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxNy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00423507-bavrucgtpa-portrait.jpg", 
      isLiked: false 
    },
    { 
      name: "Mad Square", 
      genre: "Comedy/Drama", 
      rating: "8.4/10", 
      votes: "16.9K Votes", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxNi45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00435629-werrbjluca-portrait.jpg", 
      isLiked: false 
    },
    { 
      name: "Nimbiya Banada Myaga - Page 1", 
      genre: "Drama/Thriller", 
      rating: "182 Likes", 
      votes: "", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTgyIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00428625-sgbzzjumgw-portrait.jpg", 
      isLiked: true 
    },
    { 
      name: "Nimde Kathe", 
      genre: "Comedy/Drama/Family", 
      rating: "1.2K Likes", 
      votes: "", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS4ySyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00438224-tqcehjczdw-portrait.jpg", 
      isLiked: true 
    },
    { 
      name: "Bad (2025)", 
      genre: "Action/Suspense/Thriller", 
      rating: "9.9/10", 
      votes: "241 Votes", 
      img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS45LzEwICAyNDEgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395441-fmmeqjlezd-portrait.jpg", 
      isLiked: false 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesPerPage = 6;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <Container id="movies">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h4>Recommended Movies</h4>
      </div>

      <div className="d-flex align-items-center">
        <Button variant="light" onClick={prevSlide}>&lt;</Button>
        <div className="d-flex overflow-hidden w-100 justify-content-center">
          {movies.slice(currentIndex, currentIndex + moviesPerPage).map((movie, index) => (
            <Card key={index} style={{ width: "200px", margin: "0 10px" }} className="shadow-sm">
              <Card.Img variant="top" src={movie.img} alt={movie.name} />
              <Card.Body className="text-center">
                <div className="d-flex justify-content-center align-items-center gap-1" style={{ color: movie.isLiked ? "green" : "red" }}>
                  <span>{movie.rating}</span>
                </div>
                {movie.votes && <small className="text-muted">{movie.votes}</small>}
                <Card.Title className="mt-2">{movie.name}</Card.Title>
                <Card.Text className="text-muted">{movie.genre}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Button variant="light" onClick={nextSlide}>&gt;</Button>
      </div>
    </Container>
  );
}

export default Movies;