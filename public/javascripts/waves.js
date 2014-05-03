// Get window width/height
var max_width = $(window).width();
var max_height = $(window).height();

// Night/day
var d = new Date();
var n = d.getHours();
var night = (n>7 && n <19) ? false : true;

// Stars
var moveStars = new function() {
  if(night) var star_count = 200;
  else var star_count = 0;

  // Create a symbol, which we will use to place instances of later:
  var star = new Path.Circle({
    center: [0, 0],
    radius: 2,
    fillColor: 'EEEAF2'
  });

  var symbol = new Symbol(star);

  // Place the instances of the symbol:
  for (var i = 0; i < star_count; i++) {
    var center = Point.random() * view.size;
    var placed = symbol.place(center);
    placed.scale(i / star_count + 0.01);
    placed.data = {
      vector: new Point({
        angle: Math.random() * 20,
        length : (i / star_count) * Math.random() / 5
      })
    };
  }

  function keepInView(item) {
    var position = item.position;
    var viewBounds = view.bounds;
    if (position.isInside(viewBounds)) return;
    var itemBounds = item.bounds;
    if (position.x > viewBounds.width + 5) {
      position.x = -item.bounds.width;
    }
    if (position.x < -itemBounds.width - 5) {
      position.x = viewBounds.width;
    }
  }

  return function(vector) {
    // Run through the active layer's children list and change
    // the position of the placed symbols:
    var layer = project.activeLayer;
    for (var i = 0; i < star_count; i++) {
      var item = layer.children[i];
      var size = item.bounds.size;
      var length = vector.length / 20 * size.width / 20;
      item.position += vector.normalize(length) + item.data.vector;
      keepInView(item);
    }
  };
};


// The amount of segment points we want to create per wave:
var segment_amount = 5;

// The maximum height of the wave:
var height = 30;
var sway_amount = 0.08;

// Font size, based on width
var font_size = 14 - (1400 - max_width) / 100 + "em";

// Speed of everything
var interval = 0.0025;

// Thickness of waves
var thickness = 500;

// Create a new path and style it:
var path = new Path({
  strokeColor: "0C0F66",
  strokeWidth: thickness,
  strokeCap: 'square'
});
var path2 = new Path({
  strokeColor: "#0B108C",
  strokeWidth: thickness,
  strokeCap: 'square'
});
var text = new PointText({
  content: "bryce",
  fontSize: font_size,
  fillColor: "EEEAF2",
  fontFamily: "Georgia"
});
text.position = new Point(max_width*0.25,max_height*0.6);
var path3 = new Path({
  // strokeColor: "#0E4EAD",
  strokeColor: "rgba(4,78,173,0.8)",
  strokeWidth: thickness,
  strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= segment_amount; i++) {
  path.add(new Point(i/segment_amount, 1) * view.size);
  path2.add(new Point(i/segment_amount, 1) * view.size);
  path3.add(new Point(i/segment_amount, 1) * view.size);
}

var time = 0;
function onFrame(event) {
  // Loop through the segments of the path and adjust text position/rotation
  var j = 1;
  var k = 2;
  for (var i = 0; i <= segment_amount; i++) {
    var lastSinus;
    var lastCosinus;
    if(j > segment_amount) j = 0;
    if(k > segment_amount) k = 0;
    var segment = path.segments[i];
    var segment2 = path2.segments[j];
    var segment3 = path3.segments[k];
    var sinus = Math.sin(time * 2 + i);
    var cosinus = Math.cos(time * 2 + i);
    segment.point.y = sinus * (height-10) + 700;
    segment2.point.y = sinus * (height-5) + 780;
    text.position.y = sinus * (height+10) + 580;
    // Needs a way to account for event.time interrupts
    if(i < segment_amount/2) text.rotate(sinus*sway_amount);
    else text.rotate(-cosinus*sway_amount);
    segment3.point.y = sinus * height + 860;
    j++;
    k++;
    lastSinus = sinus;
    lastCosinus = cosinus;
    time += interval;
  }
  path.smooth();
  path2.smooth();
  path3.smooth();
  var tmp = {x: max_width, y: max_height/2};
  var vector = (view.center - tmp) / 10;
  moveStars(vector/2);
}
