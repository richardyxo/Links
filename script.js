function typewriterEffect(element, delay = 0){
  let split_element=element.innerHTML.split('');
  element.innerHTML='';
  setTimeout(() => {
      split_element.forEach((value, index) => {
        setTimeout(() => {
          element.innerHTML += value
        }, 60 * index)
      })
  },delay)
}
typewriterEffect(document.getElementById('texto'))