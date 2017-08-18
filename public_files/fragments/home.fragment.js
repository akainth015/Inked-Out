const textSwitcher = $('#header-text-switch');

textSwitcher.statements = ["banner", "ad", "project", "poster"]; textSwitcher.currentStatement = 0;
setInterval(function() {
    textSwitcher.fadeOut(function() {
        textSwitcher.text(textSwitcher.statements[++textSwitcher.currentStatement % textSwitcher.statements.length]);
        textSwitcher.fadeIn();
    });
}, 2000);
const laptopFrame = $('#laptop_frame');
