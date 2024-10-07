import { useGSAP } from "@gsap/react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DemoComputer = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/sci_fi_computer.glb");

  const txt = useVideoTexture(
    props.texture || "/textures/project/project1.mp4"
  );

  //   useEffect(() => {
  //     if (txt) {
  //       txt.flipY = false;
  //     }
  //   });

  useGSAP(() => {
    gsap.from(groupRef.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group scale={0.004}>
        <group
          position={[0, 28.869, 312.193]}
          rotation={[-1.469, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group
          position={[0, 381.812, -82.657]}
          rotation={[-0.229, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
            scale={1}
          >
            <meshBasicMaterial map={txt} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group
          position={[0, 0, -94.762]}
          rotation={[0, Math.PI / 2, 0]}
          scale={123.801}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/sci_fi_computer.glb");

export default DemoComputer;
