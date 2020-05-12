document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('youtube').classList.toggle('active');
    document.getElementById('facebook').classList.toggle('active');
    document.getElementById('twitter').classList.toggle('active');
    document.getElementById('first').classList.toggle('active');
    document.getElementById('second').classList.toggle('active');
    document.getElementById('third').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('menu-cont').classList.toggle('active');
    document.getElementById('radar').classList.toggle('active');
});

let toggleElement = document.querySelector(".soft-btn")

const toggle = () => {
    toggleElement.classList.toggle('active')
    document.body.classList.toggle('on')
}
toggleElement.onclick = toggle