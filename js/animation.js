/**
 * A basic API to create animations on window scroll events
 * @constructor
 */
const ScrollAnimator = function() {
    this._components = {};
    this._sections = [];

}, Animator = new ScrollAnimator();
/**
 * Add a section of frames to the ScrollAnimator. Frame sections can overlap, and no side effects will occur
 * @param {Number} lowerBound The lowest scrollY, in pixels, at which to run the callback
 * @param {Number} upperBound The highest scrollY, in pixels, at which to run the callback
 * @param {Function} callback A function to run in lowerBound < scrollY < upperBound
 * @return {ScrollAnimator} The ScrollAnimator the function was called on
 */
ScrollAnimator.prototype.add = function(lowerBound, upperBound, callback) {
    this._sections.push({
        callback: callback,
        lowerBound: lowerBound,
        upperBound: upperBound
    });
    return this;
};
/**
 * If two parameters are specified, name will be set to values. Otherwise, the value of name will be returned
 * @param {String} name A name for the animation component
 * @param {Object} [value = undefined] A value for the animation component (jQuery, Node, etc.)
 * @return {Object} The ScrollAnimator called on, or the value stored in name
 */
ScrollAnimator.prototype.component = function(name, value) {
    if (value) {
        this._components[name] = value;
        return this;
    }
    return this._components[name];
};

Animator.component('bh1', $('#big-header-one')).component('sh1', $('#small-header-one'));
Animator.component('bh2', $('#big-header-two')).component('sh2', $('#small-header-two'));
Animator.component('active-text-id', 1).component('setTextTo', function(bigHeader, smallHeader) {
    if (Animator.component('active-text-id') === 1) {
        Animator.component('bh2').text(bigHeader);
        Animator.component('sh2').text(smallHeader);
        Animator.component('bh1').removeClass('big-header-fade-in').addClass('big-header-fade');
        Animator.component('sh1').removeClass('small-header-fade-in').addClass('small-header-fade');
        Animator.component('bh2').removeClass('big-header-fade').addClass('big-header-fade-in');
        Animator.component('sh2').removeClass('small-header-fade').addClass('small-header-fade-in');
    } else {
        Animator.component('bh1').text(bigHeader);
        Animator.component('sh1').text(smallHeader);
        Animator.component('bh2').removeClass('big-header-fade-in').addClass('big-header-fade');
        Animator.component('sh2').removeClass('small-header-fade-in').addClass('small-header-fade');
        Animator.component('bh1').removeClass('big-header-fade').addClass('big-header-fade-in');
        Animator.component('sh1').removeClass('small-header-fade').addClass('small-header-fade-in');
    }
    Animator.component('active-text-id', Animator.component('active-text-id') === 1 ? 2 : 1);
});
Animator.component('hide-headers', function() {
    Animator.component('setTextTo')('', '');
    Animator.component('setTextTo')('', '');
}).component('active-zone', 0);


Animator.add(0, 20, function() {
    Animator.component('hide-headers')();
    Animator.component('active-zone', 0);
    $('.animation-component').removeClass('stage-one').removeClass('stage-two').removeClass('stage-three');
});
Animator.add(21, 20 + innerHeight, function() {
    if (Animator.component('active-zone') !== 1) {
        Animator.component('setTextTo')('Design your print', 'Or have us do it for you');
        Animator.component('active-zone', 1);
    }
    $('.animation-component').addClass('stage-one').removeClass('stage-two').removeClass('stage-three');
});
Animator.add(21 + innerHeight, 20 + innerHeight * 2, function() {
    if (Animator.component('active-zone') !== 2) {
        Animator.component('setTextTo')('Submit your order online', 'Or email us, at inkedoutlynbrook@gmail.com');
        Animator.component('active-zone', 2);
    }
    $('.animation-component').addClass('stage-two').removeClass('stage-one').removeClass('stage-three');
});
Animator.add(21 + innerHeight * 2, 20 + innerHeight * 3, function() {
    if (Animator.component('active-zone') !== 3) {
        Animator.component('setTextTo')('Get it printed in the blink of an eye', '');
        setTimeout(function() {
            Animator.component('hide-headers')();
        }, 2000);
        Animator.component('active-zone', 3);
    }
    $('.animation-component').addClass('stage-three').removeClass('stage-one').removeClass('stage-two');
});

$('#home').height(innerHeight * 3 + 21);
addEventListener('scroll', function() {
    requestAnimationFrame(function() {
        for (let i = 0; i < Animator._sections.length; i++) {
            if (scrollY >= Animator._sections[i].lowerBound && scrollY <= Animator._sections[i].upperBound) {
                Animator._sections[i].callback();
            }
        }
    });
});
