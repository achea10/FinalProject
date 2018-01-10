
import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpotifyPlayer from 'react-spotify-player';


const Playlists = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div>
        <Jumbotron>
          <h1>Check out these Playlist we got together for you </h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              
            </span>
          </h1>
        </Jumbotron>
        </div>
        <div>
        <h3>2000s Alternative Rock</h3>
          <SpotifyPlayer
            uri="https://open.spotify.com/user/ltxteis/playlist/2VCUG2HWlEeq1zvUvRkN80"
  
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