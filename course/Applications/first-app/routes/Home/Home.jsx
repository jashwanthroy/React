"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import dataset from "./carousel.json";
const Home = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        {dataset.map(({ path, altText, title, subtitle }) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={path}
                alt={altText}
                height="500px"
                width="100vh"
              />
              <Carousel.Caption>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Home;
