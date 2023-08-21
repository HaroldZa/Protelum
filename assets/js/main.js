const toggler = document.querySelector('.menu__toggler');
const menun    = document.querySelector('.menu');
const logo = document.getElementById('hero__logo');
const nav_icon = document.getElementById('nav_icon');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menun.classList.toggle('active');
  if (menun.classList.contains('active')) {
    logo.classList.add('hidden');
    nav_icon.classList.add('hidden');
} else {
    setTimeout(function() {
        logo.classList.remove('hidden');
        nav_icon.classList.remove('hidden');
    }, 500);
}
}) 

function openSearch() {
  document.getElementById("search_nav").style.width = "100%";
}

function closeSearch() {
  document.getElementById("search_nav").style.width = "0";
}

function reloadOnOrientationChange() {
  const currentOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

  window.addEventListener('resize', function() {
    const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

    if (newOrientation !== currentOrientation) {
      location.reload();
    }
  });
}

window.onload = reloadOnOrientationChange;