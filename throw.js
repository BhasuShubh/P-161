AFRAME.registerComponent('set-bowling-balls', {
    init : function(){
        this.throwBalling()

    },
    throwBalling :function(){
        window.addEventListener('keydown', e =>{
            if(e.key== 'e'){
                var ball = document.createElement('a-entity')
                ball.setAttribute('gltf-model', './models/bowling_ball/scene.gltf')
                ball.setAttribute('scale', {x: 0.4, y: 0.4, z: 0.4})
                var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        ball.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });


        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        ball.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

        scene.appendChild(ball);
            }
        })
    }
})