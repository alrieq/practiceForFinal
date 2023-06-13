function handleClick() {
    document.getElementsByTagName("input")[0].disabled = true;
    // get the <ul> elements
    let ulElem = document.getElementById("products");
    if (ulElem.hasChildNodes()) {
        // get all <li> elements
        let liChildren = ulElem.children;
        // for each <li> element, get the second span and last span
        for (let i = 0; i < liChildren.length; i++) {
            // get the second span that contains the current price
            let priceSpan = liChildren[i].firstElementChild.nextElementSibling.nextElementSibling;
            priceSpan.style.textDecoration = "line-through";
            let currentPrice = parseFloat(priceSpan.innerText);
            // get the last span that will contain the discounted price
            let newPriceSpan = liChildren[i].lastElementChild;
            newPriceSpan.innerText = "$" + (currentPrice - (currentPrice * .20)).toFixed(2);
        }
    }
}
const clientId = "9bc1e0d31e5fdb0";
async function requestAlbumAsyncAwait(){
    let search = document.getElementById("albumIdField").value;
    let resultDiv = document.getElementById("result");

    console.log(search);
    var options = {method: "GET",redirect: "follow"};
    const headers = {'Authorization': 'Client-ID ' + clientId}; 
    const req = await fetch('https://api.imgur.com/3/album/'+search+"/images",{headers},options);
    const res = await req.json();
    for (iterator of res.data) {
        let img = document.createElement("img");
        img.src = iterator.link;
        resultDiv.appendChild(img);
    }

}