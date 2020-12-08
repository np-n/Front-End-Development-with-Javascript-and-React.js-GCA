let API_URL = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-08&sortBy=publishedAt&apiKey=5b6daf15444e4c9b8366109b168380da'
let months = ['Jan','Feb','mar','Apr','May','Jun','July','August','Sep','Nov','Oct','Dec']

window.onload = function(){
    onGetNews()
}
function onGetNews(){
    document.getElementById('news').innerHTML=`<div> Loading data..........</div>`
    // default method id GET
    fetch (API_URL,
        {method:'GET',
    }).
    then(response => response.json()).
    then(data => onDisplayNews(data.articles)).
    catch(function(error){
        document.getElementById('news').innerHTML = onGetErrorDiv()
    })
}
function onDisplayNews(news){
    let  news_html =''
    news.forEach(function(value){
        news_html += `
        <div style="border:2px solid green;">
            <h3>${value.title}</h3>
            <p>${value.source.name}</p>
            <p>${getReadableDate(value.publishedAt)}</p>
            <img src="${value.urlToImage}" style="width:100%;" alt="">
            <p>${value.content}</p>
            <a href=" ${value.url} target ="_blank"">read more</a>

        </div>`
    })
    document.getElementById('news').innerHTML = news_html

}

function getReadableDate(date){
    let date_ = new Date(date)
    // 2019 jun 21 4:20 Monday
    return  date_.getFullYear() + ' '+months[date_.getMonth()] +' '+ date_.getDate() +' '
            +date_.getHours()+':'+date_.getMinutes()+' '+ date_.getDay()

}


function onGetErrorDiv(){
    return `
    <div>
    <p>Something went wrong</p>
    <button onclick="onGetNews()">Retry</button>
    </div>`
}