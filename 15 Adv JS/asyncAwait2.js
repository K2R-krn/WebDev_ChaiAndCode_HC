function fetchPostData(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Post Data Fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("Comment Data Fetched")
        }, 3000);
    })
} 


// SOMETIMES WANT TO GRAB MULTIPLE PROMISES

async function getBlogData(){
    try { 
        console.log("Fetching blog data");
        //^ Either below way 
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

        //^ or  instead of .then  ->  .all ( takes arrays as parameter and provide all fns which you want to fetch )
        const [pData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);

        console.log(pData);
        console.log(commentData);
    } catch (error) {   //! HANDLE ERROR FIRST    tip
        console.log("Error fetching blog data", error);
           
    }
}
getBlogData();


  