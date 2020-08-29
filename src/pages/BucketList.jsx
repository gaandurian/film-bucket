import React from "react";
import { Row, Col, Button } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";

export default function BucketList({ bucketMovies }) {
  return (
    <div>
      <Row>
        <Col xs="2"></Col>
        <Col xs="8">
          <h3 style={{ marginTop: 40, marginBottom: 23, color: "#777" }}>
            Your watchlist
          </h3>

          <ul style={{ paddingLeft: 0 }}>
            {bucketMovies &&
              bucketMovies.slice(0, 3).map((el) => (
                <li
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 85% 1fr",
                    marginTop: 5,
                  }}
                >
                  <div>
                    <img
                      style={{ height: 50 }}
                      alt="movie poster"
                      src={el.Poster}
                    />
                  </div>
                  <div>
                    <p>
                      {el.Title}
                      <br />
                      {el.Year}
                    </p>
                  </div>

                  <Button
                    color="danger"
                    onClick={() => console.log("Button clicked")}
                  >
                    <AiFillDelete />
                  </Button>
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}
