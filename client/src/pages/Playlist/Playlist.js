
import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpotifyPlayer from 'react-spotify-player';
import { Input, TextArea } from "../../components/Form";


const Playlists = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div>
        <form>
          <h3>Search for your Favorite artists</h3>
            <Input 
            placeholder="Search"
            />
        </form>
        </div>
        <div>
        <h3>New Music</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX4JAvHpjipBk"
  
            />
        </div>
        <div>
        <h3>The Sound of Classical Piano</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/thesoundsofspotify/playlist/2d32hJkHO6816u3Iho8NMC"
  
            />
        </div>
        <div>
        <h3>Classic Acoustic</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX504r1DvyvxG"
  
            />
        </div>

      </Col>
    </Row>
  </Container>;

export default Playlists;