function lazyLoad(entries) {
  entries.forEach(function(entry) {
    var elem = entry.target;
    if(!elem.hasAttribute('data-src') || !entry.isIntersecting) return;

    console.log(`swapping in ${elem.getAttribute('data-src')} for`, entry);
    elem.setAttribute('src', elem.getAttribute('data-src'));
    elem.removeAttribute('data-src');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(lazyLoad, {
    threshold: 0.5
  });

  var images = document.querySelectorAll('img');
  for(var i=0; i<images.length; i++) {
    observer.observe(images[i]);
  }
});