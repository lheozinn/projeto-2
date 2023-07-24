var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d481c181-c37f-46b5-8baa-317adda03cb8","f6da9873-679a-4e4d-9ef8-a4f88c287256","38dbd08e-9a6c-4cae-b6b2-7df73f556ba6"],"propsByKey":{"d481c181-c37f-46b5-8baa-317adda03cb8":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"},"f6da9873-679a-4e4d-9ef8-a4f88c287256":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"38dbd08e-9a6c-4cae-b6b2-7df73f556ba6":{"name":"FOGUETE","sourceUrl":"assets/api/v1/animation-library/gamelab/zxDNYfPU.M7vJLHH8hxd1g__0h3yaCOU/category_icons/rocket3.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"zxDNYfPU.M7vJLHH8hxd1g__0h3yaCOU","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zxDNYfPU.M7vJLHH8hxd1g__0h3yaCOU/category_icons/rocket3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo= createSprite(200, 200)
fundo.setAnimation("fundo")
var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.setAnimation("FOGUETE")
    ball.scale=0.08
    createEdgeSprites()
function draw() {
 background("black")
  drawSprites()
  computerPaddle.y = ball.y;
  ball.bounceOff(playerPaddle) 
ball.bounceOff(topEdge)
ball.bounceOff(bottomEdge)  
ball.bounceOff(computerPaddle) 
if(keyDown("down")){
 playerPaddle.y = playerPaddle.y + 5
}
if(keyDown("up")){
playerPaddle.y = playerPaddle.y - 5
}
 if(keyDown("space")){
ball.velocityX = 3
ball.velocityY = 3
}
drawnet();//1 
}

function drawnet() //2
{
  for(var num=0;num<400;num=num+20) //3 
{
  line(200,num,200,num=10); //4
}
}

  
 


 
 
 
 
 
 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
