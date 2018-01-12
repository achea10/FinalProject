
import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpotifyPlayer from 'react-spotify-player';
import { Input, TextArea } from "../../components/Form";


const Playlists = () =>

  <Container fluid>
    <Row> 
        <div>
        
        </div>
        <div>
        <Col size="md-4">
        <h3>New Music</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX4JAvHpjipBk"
            />
        </Col>
        </div>
        <div>
        <Col size="md-4">
        <h3>The Sound of Classical Piano</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/thesoundsofspotify/playlist/2d32hJkHO6816u3Iho8NMC"
            />
          </Col>
        </div>
        <div>
        <Col size="md-4">
        <h3>Classic Acoustic</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX504r1DvyvxG"
            />
        </Col>
        </div>
    </Row>
  </Container>;

export default Playlists;