function onGetName(){
    let name = document.getElementById('name').value
    // console.log(typeof(name))
    alert('Name: '+ name)
}


/* -----------------------------------Promise------------------------------ */
let isCall = false
function promiseExample(){
    return new Promise(function(resolve,reject){
        if (isCall){
            resolve('Promise success')
        }
        else{
            reject('Promise fails')
        }

    })
}
function callPromise(){
    promiseExample().then(function(value){
        console.log(value)
    }).catch(function(error){
        console.log(error)
    })
}
/* -----------------------------------Promise Example------------------------------ */
let promiseFlag = true

function promiseExample_(){
    return new Promise(
        function(resolve,reject){
            // wait for the one second to execute the promise
            setInterval(function(){
                if (promiseFlag){
                    resolve('Promise success')
                }
                else{
                    reject('Promise fails')
                }
            },1000)
            
        }
    )
}
// calling promise Example
function callPromiseExample_(){
    promiseExample_().then(function(value){
        console.log(value)
    }).catch(error=>
        console.log(error))
}


/*----------------------------Filter in JS--------- */
function filterExample(){
    const words = ['spray','limit',
'elite','exuberant','destruction','present']

const result = words.filter(word => word.length<6)
console.log(result)
}

// Example 2
function filterExample_(){
    let arr_ = [
        {id :3},
        {id :33},
        {id :8},
        {id :23},
        {id :77},
        {id :21},
        {id :43},
        {id :64},
        {id :1},
        {id :5},
        {id :7},
        {id :22},
        {id :98},

    ]

    let newArray = arr_.filter(filterByNumber)
    console.log(newArray)
}

function filterByNumber(item){
    if (item.id>10){
        return true
    }
}

// Example 3
function filterExample__(){
    let arr_ = [
        {id :3},
        {id :33},
        {id :8},
        {id :23},
        {id :77},
        {id :21},
        {id :43},
        {id :64},
        {id :1},
        {id :5},
        {id :7},
        {id :22},
        {id :98},

    ]

    let newArray = arr_.filter(ary_items =>ary_items.id>10)
    console.log(newArray)
    
}

