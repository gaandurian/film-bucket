import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  Container,
  Col,
  Row,
  Input,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroup
} from "reactstrap";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { BsDot, BsBucketFill } from 'react-icons/bs'

const API = "http://www.omdbapi.com/?apikey=3c9bcea4&s=endgame";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    axios.get(API).then((d) => setMovies(d.data.Search));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(searchValue)
  }
  return (
    <Router>
      {/* NAVBAR */}
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><BsBucketFill style={{marginTop: -6}} /> MovieBucket</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link component={NavLink} to="/home">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link component={NavLink} to="/watchlist">
                watchlist
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

      <Container>
        <Switch>
          <Route path="/home">
            <Row>
            <Col xs="2"></Col>
              <Col xs="8">
              <h3 style={{marginTop: 40, marginBottom: 23, color: "#777"}}>
              Search a movie
            </h3>
            <form onSubmit={handleSubmit}>
              <InputGroup style={{marginTop: 24, marginBottom: 17}}>
                <Input type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.value)}/>
                <InputGroupAddon addonType="append"><Button color="danger"><FaSearch /></Button></InputGroupAddon>
                </InputGroup>
                </form>
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
                          <img
                            style={{ height: 50 }}
                            alt="movie poster"
                            src={el.Poster}
                          />
                        </div>
                        <div><p>{el.Year} <BsDot /> {el.Title}</p>
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
          </Route>
          <Route path="/watchlist">
            <div>
            <Row>
            <Col xs="2"></Col>
              <Col xs="8">
            <h3 style={{marginTop: 40, marginBottom: 23, color: "#777"}}>
              Your watchlist
            </h3>

            <ul style={{ paddingLeft: 0 }}>
                  {movies && movies.slice(0, 3).map((el) => (
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
                        <div><p>{el.Title}<br />{el.Year}</p>
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
            
          </Route>
        </Switch>
        {/* PAGES */}
      </Container>
    </Router>
  );
}

export default App;
