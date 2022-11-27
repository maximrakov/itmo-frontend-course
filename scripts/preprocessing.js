(() => {
    const start = Date.now()
    window.addEventListener("load", () => {
        const finish = Date.now()
        const el = document.querySelector(".loadtime")
        el.innerText = `${finish - start} ms`
        let pages = new Map();
        let page_names = ['aboutMe', 'contacts', 'myProjects'];
        for (const element of page_names) {
            pages.set(element, document.getElementById(element));
        }
        pages.forEach(function (value, key, map) {
            value.addEventListener('mouseenter', (e) => {
                value.style.fontFamily="sans-serif";
            });
            value.addEventListener('mouseleave', (e) => {
                value.style.fontFamily="serif";
            });
        });
        var path = window.location.pathname;
        var page = path.split("/").pop();
        page = page.slice(0,-5)
        const currentPage = document.getElementById(page);
        currentPage.style.color='green';
    })
})()