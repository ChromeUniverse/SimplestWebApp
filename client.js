function changeText() {
  var newText = document.getElementById('inputField').value;
  document.getElementById('text').innerText = newText;
  console.log('Text field now reads: "' + newText + '"');
}
