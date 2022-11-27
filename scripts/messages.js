function onSubmit(form) {
    const message = document.querySelector(".messageBody");
    const blockOfMessages = document.querySelector(".messages");
    localStorage.setItem('messages', localStorage.getItem('messages') + "<p1>" + message.value + "</p1><br>")
    blockOfMessages.innerHTML = localStorage.getItem('messages');
}

function onClick(form) {
    localStorage.setItem('messages', "")
    const blockOfMessages = document.querySelector(".messages");
    blockOfMessages.innerHTML = localStorage.getItem('messages');
}

(() => {
    window.addEventListener("load", () => {
        const blockOfMessages = document.querySelector(".messages");
        blockOfMessages.innerHTML = localStorage.getItem('messages');

    })
})()