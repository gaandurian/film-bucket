import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
} from "reactstrap";
import { MdAdd } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import SearchBar from "../components/SearchBar";

export default function Home({ movies, handleSubmit }) {
  return (
    <Row>
      <Col xs="2"></Col>
      <Col xs="8">
        <h3 style={{ marginTop: 40, marginBottom: 23, color: "#777" }}>
          Search a movie
        </h3>
        <SearchBar handleSubmit={handleSubmit} />
        <ul style={{ paddingLeft: 0 }}>
          {movies &&
            movies.map((el) => (
              <li
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 85% 1fr",
                  marginTop: 5,
                }}
              >
                <div>
                  {el.Poster !== "N/A" ? (
                    <img
                      style={{ height: 50 }}
                      alt="movie poster"
                      src={el.Poster}
                    />
                  ) : (
                    <img style={{ height: 50 }} alt="movie poster" src="https://via.placeholder.com/150x200?text=No+poster" />
                  )}
                </div>
                <div>
                  <p>
                    {el.Year} <BsDot /> {el.Title}
                  </p>
                </div>

                <Button
                  color="primary"
                  onClick={() => console.log("Button clicked")}
                >
                  <MdAdd />
                </Button>
              </li>
            ))}
        </ul>
      </Col>
    </Row>
  );
}
