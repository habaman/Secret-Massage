document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encryted = btoa(input.value);

    document.querySelector('#link-input').value = encryted;
});