const ScrollAnimator = function() {
    this._components = {};
    this._sections = [];

}, Animator = new ScrollAnimator();
ScrollAnimator.prototype.add = function(lowerBound, upperBound, callback) {
    this._sections.push({
        callback: callback,
        lowerBound: lowerBound,
        upperBound: upperBound
    });
};
ScrollAnimator.prototype.component = function(name, value) {
    if (value) {
        this._components[name] = value;
        return this;
    }
    return this._components[name];
};

Animator.add();

addEventListener('scroll', requestAnimationFrame(function() {

}));
