// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract SocialMedia is Ownable, ReentrancyGuard {
    struct Post {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
        uint256 likes;
        uint256 replyCount;
        uint256 parentId;
        bool isReply;
    }

    struct User {
        address userAddress;
        string username;
        string bio;
        uint256 followerCount;
        uint256 followingCount;
        uint256 postCount;
        bool exists;
    }

    mapping(uint256 => Post) public posts;
    mapping(address => User) public users;
    mapping(address => string) public usernames;
    mapping(string => address) public usernameToAddress;
    mapping(uint256 => mapping(address => bool)) public postLikes;
    mapping(address => mapping(address => bool)) public following;
    mapping(uint256 => uint256[]) public postReplies;

    uint256 public nextPostId = 1;
    uint256 public totalUsers = 0;
    uint256 public totalPosts = 0;

    event UserRegistered(address indexed user, string username);
    event PostCreated(uint256 indexed postId, address indexed author, string content, uint256 timestamp);
    event PostLiked(uint256 indexed postId, address indexed liker);
    event PostUnliked(uint256 indexed postId, address indexed unliker);
    event UserFollowed(address indexed follower, address indexed followed);
    event UserUnfollowed(address indexed follower, address indexed unfollowed);
    event ReplyCreated(uint256 indexed replyId, uint256 indexed parentId, address indexed author);

    constructor() Ownable(msg.sender) {}

    modifier onlyRegistered() {
        require(users[msg.sender].exists, "User not registered");
        _;
    }

    function registerUser(string memory _username, string memory _bio) external {
        require(!users[msg.sender].exists, "User already registered");
        require(bytes(_username).length > 0 && bytes(_username).length <= 32, "Invalid username length");
        require(usernameToAddress[_username] == address(0), "Username already taken");

        users[msg.sender] = User({
            userAddress: msg.sender,
            username: _username,
            bio: _bio,
            followerCount: 0,
            followingCount: 0,
            postCount: 0,
            exists: true
        });

        usernames[msg.sender] = _username;
        usernameToAddress[_username] = msg.sender;
        totalUsers++;

        emit UserRegistered(msg.sender, _username);
    }

    function createPost(string memory _content) external onlyRegistered {
        require(bytes(_content).length > 0 && bytes(_content).length <= 280, "Invalid content length");

        posts[nextPostId] = Post({
            id: nextPostId,
            author: msg.sender,
            content: _content,
            timestamp: block.timestamp,
            likes: 0,
            replyCount: 0,
            parentId: 0,
            isReply: false
        });

        users[msg.sender].postCount++;
        totalPosts++;

        emit PostCreated(nextPostId, msg.sender, _content, block.timestamp);
        nextPostId++;
    }

    function createReply(uint256 _parentId, string memory _content) external onlyRegistered {
        require(posts[_parentId].id != 0, "Parent post does not exist");
        require(bytes(_content).length > 0 && bytes(_content).length <= 280, "Invalid content length");

        posts[nextPostId] = Post({
            id: nextPostId,
            author: msg.sender,
            content: _content,
            timestamp: block.timestamp,
            likes: 0,
            replyCount: 0,
            parentId: _parentId,
            isReply: true
        });

        posts[_parentId].replyCount++;
        postReplies[_parentId].push(nextPostId);
        users[msg.sender].postCount++;
        totalPosts++;

        emit ReplyCreated(nextPostId, _parentId, msg.sender);
        emit PostCreated(nextPostId, msg.sender, _content, block.timestamp);
        nextPostId++;
    }

    function likePost(uint256 _postId) external onlyRegistered {
        require(posts[_postId].id != 0, "Post does not exist");
        require(!postLikes[_postId][msg.sender], "Already liked");

        postLikes[_postId][msg.sender] = true;
        posts[_postId].likes++;

        emit PostLiked(_postId, msg.sender);
    }

    function unlikePost(uint256 _postId) external onlyRegistered {
        require(posts[_postId].id != 0, "Post does not exist");
        require(postLikes[_postId][msg.sender], "Not liked yet");

        postLikes[_postId][msg.sender] = false;
        posts[_postId].likes--;

        emit PostUnliked(_postId, msg.sender);
    }

    function followUser(address _userToFollow) external onlyRegistered {
        require(users[_userToFollow].exists, "User does not exist");
        require(_userToFollow != msg.sender, "Cannot follow yourself");
        require(!following[msg.sender][_userToFollow], "Already following");

        following[msg.sender][_userToFollow] = true;
        users[msg.sender].followingCount++;
        users[_userToFollow].followerCount++;

        emit UserFollowed(msg.sender, _userToFollow);
    }

    function unfollowUser(address _userToUnfollow) external onlyRegistered {
        require(users[_userToUnfollow].exists, "User does not exist");
        require(following[msg.sender][_userToUnfollow], "Not following");

        following[msg.sender][_userToUnfollow] = false;
        users[msg.sender].followingCount--;
        users[_userToUnfollow].followerCount--;

        emit UserUnfollowed(msg.sender, _userToUnfollow);
    }

    function getPost(uint256 _postId) external view returns (Post memory) {
        require(posts[_postId].id != 0, "Post does not exist");
        return posts[_postId];
    }

    function getUser(address _user) external view returns (User memory) {
        require(users[_user].exists, "User does not exist");
        return users[_user];
    }

    function getUserByUsername(string memory _username) external view returns (User memory) {
        address userAddress = usernameToAddress[_username];
        require(users[userAddress].exists, "User does not exist");
        return users[userAddress];
    }

    function getPostReplies(uint256 _postId) external view returns (uint256[] memory) {
        require(posts[_postId].id != 0, "Post does not exist");
        return postReplies[_postId];
    }

    function isUsernameTaken(string memory _username) external view returns (bool) {
        return usernameToAddress[_username] != address(0);
    }

    function isFollowing(address _follower, address _followed) external view returns (bool) {
        return following[_follower][_followed];
    }

    function hasLikedPost(uint256 _postId, address _user) external view returns (bool) {
        return postLikes[_postId][_user];
    }
}