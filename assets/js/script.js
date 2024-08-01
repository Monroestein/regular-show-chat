
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