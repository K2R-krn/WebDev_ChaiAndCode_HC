function fetchData(){
    return new Promise((res, req) => {
        setTimeout(() => {
            let suc = false;
            if(suc){
                res("Data fetched sucessfully. !!");
            }else{
                rej("ERROR fetching data !!");
            }
        }, 3000);
    });
}

//! Above is just creation of promise
//^ Below we see how to consume promise

// It doesnt print or return anything as it is in states = 1. Pending 2. fulfulled 3. rejected

// we can use .then() or .catch() based on sucess or failure

fetchData()
    .then((data) => console.log(data)) // can do multiple layers of then also
    .catch((error) => console.log(error));