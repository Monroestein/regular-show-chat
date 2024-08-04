
// document.getElementById('firstChat').addEventListener('click', function () {
//     document.querySelector('.main-page').style.display='none'
//     document.querySelector('.chat').style.display='block'
// })



// Grab element
const newMessageBlock = document.getElementById('firstChat');
const newMessage = document.getElementById('new-mssg');
// What will happen to this element
function changeFontWeight(){
    newMessage.style.fontWeight='normal';
}
// When will happen
newMessageBlock.addEventListener('click', changeFontWeight);




// Search input to appear when button is pressed
const searchButtonPressed = document.getElementById('search-button');

function searchBarPopsUp(){
    const searchButton = document.getElementById('search-input');
    searchButton.style.display='inline-block';
};

searchButtonPressed.addEventListener('click', searchBarPopsUp);



//