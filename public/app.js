function Ball() {
    this.x = 300;
    this.y = 200;
    this.vx = -2;
    this.vy = 3;

    this.draw = function(brush) {
        brush.beginPath();
        brush.arc(this.x, this.y, 10, 0, 2*Math.PI);
        brush.closePath();
        brush.fillStyle = '#fff';
        brush.fill();
    };

    this.move = function() {
        var tx = this.x + this.vx;
        var ty = this.y + this.vy;

        if (tx >= 0 && tx <= 600 && (ty > 400 || ty < 0)) {
            this.vy *= -1;
        }

        if (ty >= 0 && ty <= 400 && tx > 600) {
            this.x = 300;
            this.y = 200;
            this.vx = -2;
            this.vy = 3;
        }

        if (ty >= 0 && ty <= 400 && tx < 0) {
            this.x = 300;
            this.y = 200;
            this.vx = -2;
            this.vy = 3;
        }

        if (tx > p.x && tx < p.x + 15 && ty > p.y && ty < p.y + 50) {
            this.vx *= -1;
        }

        if (tx < p2.x && tx > p2.x - 10 && ty > p2.y && ty < p2.y + 50) {
            this.vx *= -1;
        }

        this.x += this.vx;
        this.y += this.vy;
    };
}

function Paddle() {
    this.x = 20;
    this.y = 175;

    this.draw = function(brush) {
        brush.fillRect(this.x, this.y, 10, 50);
    };

    this.move = function(event) {
        this.y = event.pageY-25;
    };
}

function Paddle2() {
    this.x = 575;
    this.y = 175;

    this.draw = function(brush) {
        brush.fillRect(this.x, this.y, 10, 50);
    };

    this.move = function(event) {
        this.y = event.pageY-25;
    };
}

function Line() {

    this.draw = function(brush) {
        this.x = 296;
        this.y = 0;

        while (this.y < 390) {
            brush.fillRect(this.x, this.y, 4, 10);
            this.y += 20
        }
    }

}

$("#canvas").mousemove(function(event) {
    p.move(event);
    p2.move(event);
});

function draw() {
    var canvas = document.getElementById('canvas');
    var brush = canvas.getContext('2d');

    brush.fillStyle = '#000';
    brush.fillRect(0, 0, 600, 400);

    // Draw
    b.draw(brush);
    p.draw(brush);
    p2.draw(brush);
    l.draw(brush);

    // Move
    b.move();

    window.requestAnimationFrame(draw);
}

var b = new Ball();
var p = new Paddle();
var p2 = new Paddle2();
var l = new Line();
draw();