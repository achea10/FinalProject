import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";


// const Home = () =>
//   <Container fluid>
//     <Row>
//       <Col size="md-12">
//         <Jumbotron>
//           <h1>Home</h1>
//           <h1>
//             <span role="img" aria-label="Face With Rolling Eyes Emoji">
              
//             </span>
//           </h1>
//         </Jumbotron>
//       </Col>
//     </Row>
//   </Container>;

class Home extends React.Component {
  state = {
    posts: [],
    title: "",
    body: "",
    author: "",
    imgUrl: "",
    date: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
    .then(res =>
      this.setState({ posts: res.data, title: "", body: "", author: "", imgUrl: "", date: "" })
      )
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
        date: this.state.date
      })
      .then(res => this.loadPosts())
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Write your post here</h1>    
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Write your Post here"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}>
                Submit Post
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      )

  }  

}


export default Home;