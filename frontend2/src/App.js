// Main component that connects React frontend with Ethereum blockchain via smrt contract
//Provides interactive user interface for creating and siplaying posts on the blockchain.
import React, {useEffect, useState} from "react";
import {initWeb3, contract} from './web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, Button, Card, Row, Col, Alert} from 'react-bootstrap';

function App(){
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
// Load posts when the app starts
  useEffect(() => {
    const load = async () => {
      try{
        await initWeb3(); // Initialize Web3 and connecto to the blockchain
        const postsCount = await contract.methods.nextPostId().call();
        const postsArray = [];
        // Loop through posts and fetch each post data
        for (let i = 0; i<postsCount; i++){
          const post = await contract.methods.getPost(i).call();
          postsArray.push({
            ...post,
            id: post.id.toString(), //BigInt fix
            timestamp: Number(post.timestamp),
          });
        }
        setPosts(postsArray); // Store fetched posts in the state
      } catch (err){
        setError('Failed to load posts: ' + err.message);
      }
    };
    load(); // Call load function when component is mounted
  }, []);

  //Function to create a post
  const createPost = async () => {
    setLoading(true);
    try{
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}); // Get user accounts
      await contract.methods.createPost(content).send({ from: accounts[0]}); // Send transaction to create post
      
      //Fetch updated list of psots after creation
      const postsCount = await contract.methods.nextPostId().call(); // Get the updated post count
      const postsArray = [];
      
      for (let i =0; i<postsCount; i++){
        const post = await contract.methods.getPost(i).call(i);
        
        // Ensure BigInt values are converted to strings or numbers
        postsArray.push({
          ...post,
          id: post.id.toString(), //Convert BigInt to string
          timestamp: Number(post.timestamp), //.toString(), // Convert BigInt to number, then to readable date

        });
      };
      setPosts(postsArray); //Store updated posts in stae
      setContent(''); // Clear content input field
    } catch(err){
      setError('Failed to create post: ' + err.message);
    }
    setLoading(false);
  };

  // Function to format the timestamp to a readable date
  const formatTimestamp = (timestamp) =>{
    const date = new Date(timestamp*1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Format to local date and time
  };

  return(
    <div className="App">
      {/* Navbar */}
      <Navbar bg = "dark" variant = "dark">
        <Container>
          <Navbar.Brand href = "#home"> Truth Platform</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Container */}
      <Container className = "mt-5">
        {/* Error Alert */}
        {error && <Alert variant = "danger">{error}</Alert>}

        {/* Post Form */}
        <Row className="mb-4">
          <Col md = {8}>
            <Form.Control
              type = "text"
              value = {content}
              onChange = {(e) => setContent(e.target.value)}
              placeholder = "Enter post content"
            />
          </Col>
          <Col md = {4}>
            <Button onClick={createPost} disabled={loading} variant = "primary">
              {loading ? "Creating..." : "Create Post"}
            </Button>
          </Col>
        </Row>

        {/* Posts List */}
        <Row>
          {posts.map((post, index) => (
            <Col md ={4} className="mb-3" key = {index}>
              <Card>
                <Card.Body>
                  <Card.Title>Post by {post.author}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Card.Footer className = "text-muted">
                    <small>{formatTimestamp(post.timestamp)}</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;