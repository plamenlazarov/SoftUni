Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

var Shapes = (function() {
    var Shape = (function() {
        function Shape(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
        }

        Shape.prototype.toString = function() {
            return this.constructor.name + ' -> x: ' + this._x + ', y: '+ this._y + ' color: ' + this._color;
        }


        return Shape;

    })();

    var Circle = (function () {
        function Circle(x, y, color, radius) {
            Shape.call(this, x, y, color);
            this._radius = radius;

        }

        Circle.extends(Shape);

        Circle.prototype.toString = function () {
            return Shape.prototype.toString.call(this) + ', radius: ' + this._radius;
        }

        return Circle;
    })();

    var Rectangle = (function() {
        function Rectangle(x, y, color, width, height) {
            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function() {
            return Shape.prototype.toString.call(this) + ', width: ' + this._width + ', height: ' + this._height;
        }

        return Rectangle;
    })();

    var Triangle = (function() {
        function Triangle(x, y, color, x1, y1, x2, y2) {
            Shape.call(this, x, y, color);
            this._x1 = x1;
            this._x2 = x2;
            this._y1 = y1;
            this._y2 = y2;
        }

        Rectangle.extends(Shape);

        Triangle.prototype.toString = function() {
            return Shape.prototype.toString.call(this) + ', x1: ' + this._x1 + ', y1: ' + this._y1 + ', x2: ' + this._x2 + ', y2: ' + this._y2 ;
        }

        return Triangle;
    })();

    var Line = (function() {
        function Line(x, y, color, x1, y1) {
            Shape.call(this, x, y, color);
            this._x1 = x1;
            this._y1 = y1;
        }

        Line.extends(Shape);

        Line.prototype.toString = function() {
            return Shape.prototype.toString.call(this) + ', x1: ' + this._x1 + ', y1: ' + this._y1;
        }

        return Line;
    })();

    var Segment = (function() {
        function Segment(x, y, color, x1, y1) {
            Shape.call(this, x, y, color);
            this._x1 = x1;
            this._y1 = y1;
        }

        Segment.extends(Shape);

        Segment.prototype.toString = function() {
            return Shape.prototype.toString.call(this) + ', x1: ' + this._x1 + ', y1: ' + this._y1;
        }

        return Segment;
    })();

    return {
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    };
})();

var shape = new Shapes.Shape(10, 12, 'red');
    circle = new Shapes.Circle(3, 5, 'red', 12);
    rect = new Shapes.Rectangle(23, 15, '#FFF', 3, 5);
    triangle = new Shapes.Triangle(33, 10, '#aaa', 12, 22, 10, 18),
    line = new Shapes.Line(4, 6, '#000', 8, 7),
    segment = new Shapes.Segment(5, 9, '#fefefe', 3, 7);

console.log(shape.toString());
console.log(circle.toString());
console.log(rect.toString());
console.log(triangle.toString());
console.log(line.toString());
console.log(segment.toString());
