addEventListener('scroll', function() {
    requestAnimationFrame(function() {
        if (scrollY === 0) {
            document.querySelector('#header_top').style.animation = 'enlarge-header 0.5s forwards';
        } else {
            document.querySelector('#header_top').style.animation = 'shrink-header 0.5s forwards';
        }
    });
});