var modelv1 = {}
window['modelv1'] = modelv1

fetch('v1/tokenizer.json')
  .then(response => response.json())
  .then(data => {
    modelv1.tokenizer = data
  })
  .catch(error => console.error('Error:', error));
