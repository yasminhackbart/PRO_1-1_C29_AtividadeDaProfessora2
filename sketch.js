const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

function setup() 
{
  //cria o "fundo"
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  //cria o chão
  ground = new Ground(200,680,600,20);

  //cria uma nova corda com 7 segmentos e na posição X/Y


  //cria a "bola"

  
  //adiciona fisica usando o matter.js


  //cria um link entre a corda e a bola


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  //cor do "fundo"
  background(51);

  //desenha a corda


  //desenha a "bola" com o tamanho X=30 e Y=30


  //atualiza em tempo real a fisica
  Engine.update(engine);

  //desenha o chão
  ground.show();
 
}
