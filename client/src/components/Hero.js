import React from "react";
import styled from "styled-components";
import RBCarousel from "react-bootstrap-carousel";
import { Link } from "react-router-dom";

export default function Hero({ slides }) {
  return (
    <HeroContainer className="col-12">
      <RBCarousel
        animation={true}
        autoplay={true}
        slidesshowSpeed={1500}
        defaultActiveIndex={0}
        version={4}
      >
        {slides.map((slide, i) => {
          return (
            <div key={i} style={{ minHeight: "100%", maxHeight: "70vh" }}>
              <img
                src={`/${slide.img}`}
                alt="background"
                className="hero-img"
              />
              <div className="carousel-center text-center hero-info">
                <h1 className="text-uppercase">{slide.center.h1 || ""}</h1>
                <h4 className="text-muted">{slide.center.h4 || ""}</h4>
                {slide.center.btn ? (
                  <Link to={slide.center.btn.to}>
                    <button className="btn btn-outline-primary font-weight-bold mt-4">
                      {slide.center.btn.text}
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </RBCarousel>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  max-height: 70vh;
  min-height: 400px;
  padding: 0;
  max-width: 100%;
  .hero-info {
    background: rgba(255, 255, 255, 0.75);
    padding: 2rem;
    border-radius: 10px;
    max-width: 100%;
    h1 {
      font-size: 3rem;
      letter-spacing: 0.5rem;
    }
  }
  .carousel,
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }
  .hero-img {
    height: 100%;
    width: 100%;
    filter: brightness(0.7);
  }
`;
