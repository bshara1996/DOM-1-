/* Ex1 */
function addClass() {
  let elem = document.getElementById('text');
  let input = document.getElementById('classInput').value; // user input
  elem.className = input;
}

/* Ex2 */
function toggleVisibility(elementId) {
  /* visible must be first in css because css do the last style*/
  let element = document.getElementById(elementId);
  element.classList.toggle('hidden');
}

/* Ex3 */
function clicked() {
  let elem = document.querySelector('#click-btn');
  elem.textContent = 'clicked!';
  elem.classList.add('btn-after');
}

