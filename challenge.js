const store = {}
let isPaused = false

document.addEventListener('DOMContentLoaded', function(event) {

  // COUNTER INCREMENTING
  const counter = document.getElementById('counter');
  let interval = setInterval(function() {
    if (isPaused === false) {
      let num = parseInt(counter.innerHTML)
      counter.innerHTML = ++num
    }
   }, 1000);

   // PLUS BUTTON
   const pButton = document.getElementById('+');
   pButton.addEventListener('click', function(event) {
     if (isPaused === false) {
       let num = parseInt(counter.innerHTML)
       counter.innerHTML = ++num
     }
   })

   // MINUS BUTTON
   const mButton = document.getElementById('-');
   mButton.addEventListener('click', function(event) {
     let num = parseInt(counter.innerHTML)
     counter.innerHTML = --num
   })


   // LIKE BUTTON
   const hButton = document.getElementById('<3');
   hButton.addEventListener('click', function(event) {
    if (isPaused === false) {
      const pTags = document.getElementsByTagName('p')
      const number = parseInt(counter.innerHTML)

      if (store[number] === undefined) {
        store[number] = 1
      } else {
        ++store[number]
      }

      document.querySelector('ul').remove()
      const list = document.createElement('ul')
      document.body.appendChild(list)

      for (const element in store) {
        let listItem = document.createElement('li')
        listItem.innerHTML = `${element} with ${store[element]}`
        list.appendChild(listItem)
      }
    }
  })


   // PAUSE BUTTON
   const pause = document.getElementById('pause')
   pause.addEventListener('click', function() {
     if (isPaused === false) {
       isPaused = true;
       pause.innerHTML = 'resume'
     } else {
       isPaused = false;
       pause.innerHTML = 'pause'
     }
   })


   // COMMENTS
   const input = document.getElementById('input')
   const submit = document.getElementById('submit')
   const commentList = document.getElementById('list')

   submit.addEventListener('click', function(event){
     event.preventDefault()
     if (isPaused === false) {
       let comment = document.createElement('p')
       comment.innerHTML = input.value
       commentList.appendChild(comment)
       input.value = ''
     }
   })
})
