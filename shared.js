function moveMyCharacterAroundWithTheMouse(character) {
  var characterElement = document.querySelector('.' + character);

  window.addEventListener('mousemove', function moveCharacter(mouseEvent) {
      characterElement.style.top = mouseEvent.clientY + 'px'; 
      characterElement.style.left = mouseEvent.clientX + 'px';
  });
    
}
