//var -------> const

//const matterMin = require("./matter.min");

const Engine = Matter.Engine; //Crear espacio de nombre para Engine
const World = Matter.World; //Crear espacio de nombre para World
const Bodies = Matter.Bodies; //Crear espacio de nombre para Bodies
const Body = Matter.Body; //Crear espacio de nombre para Body
var botton;
var angle=60;




function setup() {
  createCanvas(600,600);

  botton = createImg("up.png");
  botton.position(25,30);
  botton.size(50,50);
  botton.mouseClicked(force);

   engine = Engine.create(); //crear engine = motor //esto es una función, yaque tiene dos parentesis vacíos.
   world = engine.world; //Agregar world a engine
                             //el Engine de la linea 17 esta en mayúsculas por que lo mandamos a llamar
   

  
   var ball_options = {
    restitution: 0.95, //Rebote
    frictionAir:0.01 //Gravedad
  }
   
   var ground_options = {
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options); //creación del piso
  World.add(world,ground); //agregar al mundo
  ground1 = Bodies.rectangle(100,300,100,20,ground_options); //creación del piso
  World.add(world,ground1); //agregar al mundo
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);  
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine); //=drawSprites();
  
  

  
  //rect(ground.position.x,ground.position.y,650,20);
  
  Matter.Body.rotate(ground1,angle);
  push();//nueva posición
  translate(ground1.position.x,ground.position.y);//moverlo  // AQUI AL SEGUNDO GROUND LE FALTA EL NUMERO 1 
  rotate(angle);
  pop();
  angle +=0.1;
  rect(0,0,100,20); // HAY QUE MOVER ESTA INSTRUCCIÓN ARRIBA DE POP 
  ellipse(ball.position.x,ball.position.y,20); //funcion para la pelota
  rect(ground1.position.x,ground1.position.y,650,20);//escribir una función rectangle para mostrar el suelo.


  
  
}

function force() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
