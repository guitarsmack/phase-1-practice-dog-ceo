document.addEventListener("DOMContentLoaded",doStuff)

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function doStuff(){
    getImages()
    getBreeds()
}



function getBreeds(){
    fetch(breedUrl).then(resp => resp.json()
    .then(data => postBreeds(data)))
}


function postBreeds(array){
    Object.values(array["message"]).forEach(element => {
        if(element.length !== 0){
            element.forEach(item => {console.log(item)
                let li = document.createElement("li")
                li.innerText = item
                li.addEventListener("click",function(e){
                    e.target.style.color = "red"})
                let location = document.getElementById("dog-breeds")
                location.appendChild(li)
            })}
    })
}



// function postBreeds(array){
//     Object.values(array["message"]).forEach(element => {
//         if(element.length !== 0){
//             element.forEach(item => {
//             const li = document.createElement("li")
//             li.innerText = element
//             document.getElementById["dog-breeds"].appendChild(li)
//         })}
//     })
// }


function getImages(){
    fetch(imgUrl).then(resp => resp.json()
    .then(data => postImage(data["message"])))
}

function postImage(array){
    console.log(array)
    array.forEach(element => {
        const image = document.createElement("img")
        image.src = element
        const location = document.getElementById("dog-image-container")
        location.appendChild(image)
    });
}