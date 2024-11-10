// console.log('Hiiii brother attached.');
// console.log(document.getElementsByClassName("firsth1"));


// alert("connected"); // Get this when loaded web page 

//Example 1
// document.querySelector('') // # for id,   . for id

document.getElementById("changeTextButton")
.addEventListener('click', function (){
    console.log(this)   // => Here this points to current context 
})  

document.getElementById("changeTextButton")
.addEventListener('click', () => {
    console.log(this)   // => Here this points to global this 
})  


//^  E X A M P L E   1
//^ Now on click I want to change content of paragraph
document.getElementById("changeTextButton")
.addEventListener('click', function (){
    console.log(this)   // => Here this points to current context 
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent = "PARA CHANGED.  : ) => : )"
})  

 

//^   E X A M P L E   2
document.getElementById("highlightFirstCity")
.addEventListener("click", function(){
    let citiesList = document.getElementById("citiesList");
    console.log(citiesList); // Give whole list 

    // Now to grab first child / element what we do is 
    // console.log(citiesList.firstElementChild);           //! To check if we getting only first child element or no
    // console.log(citiesList.firstElementChild.classList)  //! To check if we getting correct class or no
    citiesList.firstElementChild.classList.add("highlight");

})


//^  E X A M P L E  3
document.getElementById("changeOrder")
.addEventListener("click", function(){
    let currCoffee = document.getElementById("coffeeType");
    currCoffee.textContent = "Espresso";
    currCoffee.style.backgroundColor = "brown";  // Can also change CSS
    currCoffee.style.padding= "5px";  
});


//^  E X A M P L E   4
document.getElementById("addNewItem")
.addEventListener("click", function(){
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";
    //  As we want to append a child in unordered list
    document.getElementById("shoppingList").appendChild(newItem);
    // document.getElementById("shoppingList");
});

//^  E X A M P L E   5
document.getElementById("removeTaskButton")
.addEventListener("click", function(){
    let tList = document.getElementById("taskList");
    // tList.remove(); // Removes Tasklist Completely
    tList.lastElementChild.remove();
});







//^  Video 2  ============================================================================


// Many type of events - click mousehover doubleclick db etcetc keyboard key up down etc
//
//^    E X A M P L E   6
document.getElementById("teaList")
.addEventListener('click', function(event){
    // console.log(event);
    if(event.target && event.target.matches('#teaItem')){
        alert("You selected : " + event.target.textContent);
    }
});

//^    E X A M P L E   7
document.getElementById("feedbackForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
        "feedbackDisplay"
    ).textContent = `Feedback is : ${feedback}`;
});

//^  E X A M P L E  8
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

//^ E X A M P L E  9
document.getElementById("toggleHighlight")
.addEventListener('click', function(){
    let descText = document.getElementById("descriptionText");
    descText.classList.toggle("highlight");
})

// Not everytime we get emelents by tagname and id and class sometimes
// we get element by NODELIST etc... 
// Nodelist might look like an array bit is not an array and should be converted to an array







