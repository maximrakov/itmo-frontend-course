(() => {
    const start = Date.now()
    window.addEventListener("load", () => {
        const finish = Date.now()
        const el = document.querySelector(".loadtime")
        el.innerText = `${finish - start} ms`
        const aboutMe = document.getElementById('aboutMe');
        const contacts = document.getElementById('contacts');
        const myProjects = document.getElementById('myProjects');
        console.log(aboutMe)
        aboutMe.addEventListener('mouseenter', (e) => {
            aboutMe.style.fontFamily="sans-serif";
        });
        aboutMe.addEventListener('mouseleave', (e) => {
            aboutMe.style.fontFamily="serif";
        });
        contacts.addEventListener('mouseenter', (e) => {
            contacts.style.fontFamily="sans-serif";
        });
        contacts.addEventListener('mouseleave', (e) => {
            contacts.style.fontFamily="serif";
        });
        myProjects.addEventListener('mouseenter', (e) => {
            myProjects.style.fontFamily="sans-serif";
        });
        myProjects.addEventListener('mouseleave', (e) => {
            myProjects.style.fontFamily="serif";
        });
        var path = window.location.pathname;
        var page = path.split("/").pop();
        page = page.slice(0,-5)
        const currentPage = document.getElementById(page);
        currentPage.style.color='green';
    })
})()