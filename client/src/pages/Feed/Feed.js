import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Modal from "../../components/Modal";


class Feed extends Component {

  state = {

    posts: [],
    title: "",
    body: "",
    author: "",
    imgUrl: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
    .then(res =>this.setState({ posts: res.data, title: "", body: "", author: "", imgUrl: ""}))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    if (this.state.title && this.state.author && this.state.body) {

      API.savePost({
        title: this.state.title,
        author: this.state.author,
        body: this.state.body,
        imgUrl: this.state.imgUrl,
      }).then(res => this.loadPosts()).catch(err => console.log(err));
    }
  };

  render() {

    return (

      <Container center>
        <Row>
          <Col size="md-12" >
              <h1>Music to your ears</h1>    
            <form>
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Write your Post here"
              />
              <Input
                value={this.state.imgUrl}
                onChange={this.handleInputChange}
                name="imgUrl"
                placeholder="add and image"
              />
              <Button
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}>
                Submit Post
              </Button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
              <h1>Posts</h1>
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id} style={{textDecoration: 'none'}}>
                        <h5>{post.author}</h5> 
                        <h6>{post.title}</h6> 
                        <h7>{post.body}</h7>
                        <br></br>
                        <img src={post.imgUrl} style={{width: 200, height: 200}}></img>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            <Modal> 
            </Modal>
          </Col>
        </Row>
        
      </Container>
    )
  }  
}


export default Feed;