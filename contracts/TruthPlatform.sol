// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Provides decentralized platform on Ethereum blockchain for creating, storing, and retrieving posts.


contract TruthPlatform {
    struct Post {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
    }

    Post[] public posts; //Stores all posts in an array
//     // mapping(uint256 => Post) public posts;
    uint256 public nextPostId;


    event PostCreated(uint256 id, address author, string content, uint256 timestamp);

    function createPost(string memory content) public {
        posts.push(Post(nextPostId, msg.sender, content, block.timestamp));
    //     posts[nextPostId] = Post(nextPostId, msg.sender, content, block.timestamp);
        emit PostCreated(nextPostId, msg.sender, content, block.timestamp);
        nextPostId++;
    }

    function getPost(uint256 id) public view returns (Post memory) {
        require(id < nextPostId, "Post does not exist.");
        return posts[id];
    }

    function getPosts() public view returns (Post[] memory) {
        return posts;
    }

    function getPostCount() public view returns(uint256){
        return nextPostId;
    }
}
