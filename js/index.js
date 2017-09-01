addEventListener('scroll', function() {
    requestAnimationFrame(function(number) {
        if (scrollY < 10) {
            document.getElementById('header-image-container').classList.remove('header-image-container-small');
        } else {
            document.getElementById('header-image-container').classList.add('header-image-container-small');
        }
    });
});
/* Apply effects to the flickaroo */
const flickaroo = document.getElementById('flickaroo'), flicks = ['event', 'project', 'campaign', 'life', 'business', 'channel'];
var currentFlick = 0;
setInterval(function() {
    flickaroo.textContent = flicks[++currentFlick % flicks.length];
}, 2000);
/* Add listener to the form */
