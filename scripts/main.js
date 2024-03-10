document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.nav').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition - 50,
            behavior: 'smooth'
        });
    });
});

const addres = document.querySelector('.addres');
console.log(addres)
addres.onclick = function () {
    document.execCommand('copy');
}
addres.addEventListener('copy', (e) => {
    event.preventDefault();
    if (e.clipboardData) {
        e.clipboardData.setData("text/plain", addres.textContent);
        alert('Copied to clipboard')
    }
});