var count=0;
const addToCart = () => {
    count++
    document.getElementById('co').innerText=count
}
document.getElementById('btn-add').addEventListener('click', addToCart)