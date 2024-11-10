function fetchUserData(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej({name: "K2R0", url: "https://krnrthd.com"}) 
        }, 3000);
    })
}
//* Below is REGULAR method
// fetchUserData
// .then()
// .catch();

//* Rather than above we do below //   /  Another way of doing thinfs
//^ Basically below part if code is correct is works perfectly if something goes wrong it doesnt stop it catch error and continue to next part of code and not stop here only
async function getUserData(){  // creating my own function to get the data
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData()     // CAN ONLY USE AWAIT WHEN WE HAVE ASYNC FUNCTION
        console.log("User Data", userData);

    } catch (error) {
        console.log("Error fetching data", error); 
    }
}
getUserData();

//^         On passing resolve
//*   =>    Fetching user data...
//          Wait for 3 second
//*         User Data { name: 'K2R0', url: 'https://krnrthd.com' }

//^         On passing reject
//*   =>    Fetching user data...
//*         Error fetching data { name: 'K2R0', url: 'https://krnrthd.com' }
