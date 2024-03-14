import React, { useEffect } from 'react';
import * as THREE from 'three';
import './style.css';

function ThreeTitle() {
    let scene, camera, renderer;

    const vertexShaderSource = `
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;

        void main() {

            vColor = customColor;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_PointSize = size * ( 300.0 / -mvPosition.z );
            gl_Position = projectionMatrix * mvPosition;

        }
    `;

    const fragmentShaderSource = `
         uniform vec3 color;
         uniform sampler2D pointTexture;

         varying vec3 vColor;

         void main() {

           gl_FragColor = vec4( color * vColor, 1.0 );
           gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

         }
    `;

    useEffect(() => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create shader material
        var material = new THREE.ShaderMaterial({
            uniforms: {/* Your uniforms here */ },
            vertexShader: vertexShaderSource,
            fragmentShader: fragmentShaderSource
        });

        var animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            // cleanup on unmount
            renderer.dispose();
            scene.dispose();
        };
    }, []);


    return (
        <div id="magic">
        </div>
    );
}

export default ThreeTitle;
