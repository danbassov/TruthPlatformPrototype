const TruthPlatform = artifacts.require("TruthPlatform");

module.exports = async function(callback){
    try{
        const truth = await TruthPlatform.deployed();

        // Create a post
        await truth.createPost("This is a scripted post");
        console.log("Post created!");

        

        //Check if there are posts
        const nextPostId = await truth.nextPostId();
        if(nextPostId>0){

            const post = await truth.getPost(0);
            console.log("First post:", post);
        }else{
            console.log("No posts available.");
        }
    } catch(error){
        console.error("Error in script execution", error);
    }
    callback();
};