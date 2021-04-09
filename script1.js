alert("Javacript подключен");
alert("Реально подрубил однако");

// Инициализируем движок
var world = new CANNON.World();
world.gravity.set(0, 0, -9.82); // Устанавливаем гравитацию (движок использует единицы СИ)

// Создаём объект и добавляем его на сцену
var radius = 1;
var sphereBody = new CANNON.Body({
   mass: 5,
   position: new CANNON.Vec3(0, 0, 10),
   shape: new CANNON.Sphere(radius)
});
world.addBody(sphereBody);

var fixedTimeStep = 1.0 / 60.0;
var maxSubSteps = 3;

// Запускаем цикл симуляции
var lastTime;
(function simloop(time){
  requestAnimationFrame(simloop);
  if(lastTime !== undefined){
     var dt = (time - lastTime) / 1000;
     world.step(fixedTimeStep, dt, maxSubSteps);
  }
  lastTime = time;
})();

mesh.position.x = body.position.x;
mesh.position.y = body.position.y;
mesh.position.z = body.position.z;
mesh.quaternion.x = body.quaternion.x;
mesh.quaternion.y = body.quaternion.y;
mesh.quaternion.z = body.quaternion.z;
mesh.quaternion.w = body.quaternion.w;


/* Крутой */
