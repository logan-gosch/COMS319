const rectangle = {
    type: "rectangle",
    _width: 5,
    _height: 10,
    set width(width) {
        this._width = width;
    },
    get width() {
        return this._width;
    },
    set height(height) {
        this._height = height;
    },
    get height() {
        return this._height;
    },
    area: function () {
        return this._width * this._height;
    }
}

const circle = {
    type: "circle",
    _radius: 7,
    set radius(radius) {
        this._radius = radius;
    },
    get radius() {
        return this._radius;
    },
    area: function() {
        return Math.PI * this._radius * this._radius;
    }
}

console.log(rectangle.area());
console.log(circle.area());

