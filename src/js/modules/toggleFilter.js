export function toggleFilter (listId) {
    const filterList = document.querySelector(`#${listId}`)
    filterList.addEventListener('click', (e) => {
        if (e.target.nodeName !== "BUTTON") {
            return;
        }
        filterList.querySelector('.active').classList.remove('active')
        e.target.classList.toggle('active')
    })
}