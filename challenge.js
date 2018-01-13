document.addEventListener('DOMContentLoaded', function(event) {

  // COUNTER INCREMENTING
  const counter = document.getElementById('counter');
  let interval = setInterval(function() {
      let num = parseInt(counter.innerHTML)
      counter.innerHTML = ++num
   }, 1000);

   // PLUS BUTTON
   const pButton = document.getElementById('+');
   pButton.addEventListener('click', function(event) {
     let num = parseInt(counter.innerHTML)
     counter.innerHTML = ++num
   })

   // MINUS BUTTON
   const mButton = document.getElementById('-');
   mButton.addEventListener('click', function(event) {
     let num = parseInt(counter.innerHTML)
     counter.innerHTML = --num
   })

   const hButton = document.getElementById('<3');
   hButton.addEventListener('click', function(event) {
    let num = parseInt(counter.innerHTML)
    const like = document.createElement('p')
    const pTags = document.getElementsByTagName('p')

    like.innerHTML = `1 LIKES ON ${num}`
    document.appendChild(like)

   })

})
