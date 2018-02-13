
var position;

var bcAnimation = function(p) {

  updateScalePosition = function() {
    position = (position + 1) % 60;
    p.draw()
  }

  p.setup = function() {
    var myCanvas = p.createCanvas(800,200)
    myCanvas.parent('bc_anim')
    p.noStroke()
    p.noLoop()
    chain = p.loadImage("images/chain.png")
    position = 0;
    setInterval(updateScalePosition, 95)
  }

  p.draw = function() {
    p.clear()
    //p.ellipse(p.mouseX,p.mouseY,20,20)


    var fixed_rwidth = 100.0
    var fixed_rheight = 60.0
    var buffer = 60
    var rwidth = 0;
    var rheight = 0;

    for(var i = 0; i < 5; i++){
      if(i == position) {
        rwidth = fixed_rwidth * 1.05;
        rheight = fixed_rheight * 1.15;
        p.fill(255,50,255)
      } else {
        rwidth = fixed_rwidth;
        rheight = fixed_rheight;
        p.fill(0,100,200)
      }
      p.rect(20 + i*(rwidth + buffer) , p.height*0.5 - rheight*0.5, rwidth, rheight, 10)
    }

    //p.image(chain.resize(100, 20), 0, 0)


    scale = 1.0;
  }

	p.mouseMoved = function() {
		p.redraw()
	}
}
var viz = new p5(bcAnimation)
