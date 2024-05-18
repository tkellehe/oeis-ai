const tf = require('@tensorflow/tfjs');

var modelv1 = {}
window['modelv1'] = modelv1

// Load the tokenizer
fetch('v1/tokenizer.json')
  .then(response => response.json())
  .then(data => {
    modelv1.tokenizerJson = data
  })
  .catch(error => console.error('Error:', error));

// Load the TF model
async function loadModel() {
    modelv1.model = await tf.loadLayersModel('v1/model.json');
}
loadModel().catch(console.error);
