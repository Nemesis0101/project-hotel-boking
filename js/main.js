// preloader
function preloader() {
    const preloader = document.querySelector(".preloader");
    window.onload = function () {
        preloader.classList.add("preloader_loaded");
        map();
        openTabs();
    };
}
preloader();
//

// map
function map() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVtZXNpczAxMDEiLCJhIjoiY2tjajFya2c4MWVoNTJ0cDBndm9jYXlpayJ9._NFZE7fPSCLyr7tvDuYaWg';
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // starting position
        zoom: 9 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
}
//

// tabs
function openTabs() {
    document.querySelectorAll('.hotel-info-tabs-triggers__button').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.hotel-info-tab').forEach((child) => {
                child.classList.remove("content-active");
            });
            console.log('test');

            document.getElementById(id).classList.add('content-active');
        })
    })
}
//
