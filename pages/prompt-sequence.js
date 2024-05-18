window.onload = function() {
    // Find all div elements with the custom attribute "prompt-sequence"
    const divs = document.querySelectorAll('div[prompt-sequence]');

    // For each div, add a text input element, a number input element, and a submit button
    divs.forEach(div => {
        // Create the text input element
        const textInput = document.createElement('input');
        textInput.type = 'text';

        // Create the number input element
        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.min = 1;
        numberInput.max = 32;

        // Create the submit button
        const button = document.createElement('button');
        button.textContent = 'Submit';

        // Create the output text input element
        const output = document.createElement('input');
        output.type = 'text';
        output.readOnly = true;

        // When the button is clicked, populate the output text input element with "Hello, world!"
        button.onclick = function() {
            output.value = 'Hello, world!';
        };

        // Add the elements to the div
        div.appendChild(textInput);
        div.appendChild(numberInput);
        div.appendChild(button);
        div.appendChild(output);
    });
};
