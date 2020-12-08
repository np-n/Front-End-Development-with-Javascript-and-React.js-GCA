let API_URL = 'https://www.fruitmap.org/api/trees/'
window.onload = function(){
    onGetFruits()
    // while loading data show loading status to user instead of blank screen
    document.getElementById('fruits').innerHTML = `<div style="padding:30px;">loading data.....</div>`
}
function onGetFruits(){
    // while loading data show loading status to user instead of blank screen
    document.getElementById('fruits').innerHTML = `<div style="padding:30px;">loading data.....</div>`

    fetch(API_URL,{
        method:'GET',
    }).
    then(response => response.json()).
    then(data => onDisplayData(data)).
    catch(function(error){
        document.getElementById('fruits').innerHTML = onGetErrorDiv()
    }
    )
}
function onDisplayData(fruits){
    let fruits_html =''
    fruits.forEach(function(value){
        fruits_html += `<div style="border:2px solid ${value.color}"><b>${value.name}</b><br>
                        ${value.count} </div>`
    })

    document.getElementById('fruits').innerHTML = fruits_html
}

function onGetErrorDiv(){
    return `<div>
    <div> Something Went Wrong. Please Try again!</div>
    <button onclick ="onGetFruits()"> Try again</button>
    </div>`
}

// // async-await---------------------------------
// async function getAPIData(){
//     await fetch(API_URL)
// }
// getAPIData().then(response=> response.json()).
//             .then(data=>console.log(data)).
//             catch(error){
//                 console.log(error.message)
//             }