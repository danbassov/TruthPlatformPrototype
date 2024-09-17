// Test script to ensure Solidity smart contract behaves as expected

const TruthPlatform = artifacts.require("TruthPlatform");

contract("TruthPlatform", (accounts) =>{ // accounts param is array of Ethereum accounts provided by Truffle
    it("should create a post and retrieve it", async () =>{ //Test case to check if post can be created and retrieved correctly
        const truth = await TruthPlatform.deployed();

        // Create a post
        await truth.createPost("Test post", {from: accounts[0]});

        //Retrieve the post
        const post = await truth.getPost(0);

        //Validate content and author
        assert.equal(post.content, "Test post", "The post contect is incorrect");
        assert.equal(post.author, accounts[0], "The post author is incorrect");

    });
    it("should return the correct number of posts", async() =>{
        const truth = await TruthPlatform.deployed();

        //Create a post
        await truth.createPost("Another test post", {from:accounts[1]});

        //Fetch all posts
        const posts = await truth.getPosts();

        //Validate the number of posts
        assert.equal(posts.length, 2, "The number of posts is incorrect");
    });
});