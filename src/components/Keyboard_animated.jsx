import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/keyboard_animated.gltf");
  const { actions } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  const { getText } = props;

  const handler = (event, settings) => {
    event.stopPropagation();
  
    actions[settings.actionKey].setLoop(THREE.LoopOnce).play().reset();
    getText(settings.text);
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="cord"
          geometry={nodes.cord.geometry}
          material={materials.darkgrey}
          rotation={[0.049, 0, 0]}
        />
        <mesh
          name="body"
          geometry={nodes.body.geometry}
          material={materials.yellow}
          rotation={[0.049, 0, 0]}
        />
        <mesh
          name="bottom"
          geometry={nodes.bottom.geometry}
          material={materials.darkgrey}
          rotation={[0.049, 0, 0]}
        />
        <mesh
          name="cap"
          geometry={nodes.cap.geometry}
          material={materials.powerbank_grey}
          rotation={[0.049, 0, 0]}
        />
        <group name="plug" rotation={[0.049, 0, 0]}>
          <mesh
            name="plug_1"
            geometry={nodes.plug_1.geometry}
            material={materials.darkgrey}
          />
          <mesh
            name="plug_2"
            geometry={nodes.plug_2.geometry}
            material={materials.purple}
          />
        </group>
        <mesh
          name="plug_rim"
          geometry={nodes.plug_rim.geometry}
          material={materials.darkgrey}
          rotation={[0.049, 0, 0]}
        />
        <group name="cord_rim" rotation={[0.049, 0, 0]}>
          <mesh
            name="cord_rim_1"
            geometry={nodes.cord_rim_1.geometry}
            material={materials.purple}
          />
          <mesh
            name="cord_rim_2"
            geometry={nodes.cord_rim_2.geometry}
            material={materials.darkgrey}
          />
        </group>
        <mesh
          name="key_logo"
          geometry={nodes.key_logo.geometry}
          material={materials.logo_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={event => handler(event, {
            actionKey: 'key_logoAction',
            text: "Raiffeisen Bank sends you love"
          })}
          
        />
        <mesh
          name="key_long"
          geometry={nodes.key_long.geometry}
          material={materials.logoText_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_longAction"].setLoop(THREE.LoopOnce).play().reset();
            getText("Raiffeisen Bank says 'Hi!'");
          }}
        />
        <mesh
          name="key_middle_left"
          geometry={nodes.key_middle_left.geometry}
          material={materials.nfc_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_middle_leftAction"]
              .setLoop(THREE.LoopOnce)
              .play()
              .reset();
            getText("Pay by NFC with Raiffeisen Bank");
          }}
        />
        <mesh
          name="key_middle_middle"
          geometry={nodes.key_middle_middle.geometry}
          material={materials.bitcoin_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_middle_middleAction"]
              .setLoop(THREE.LoopOnce)
              .play()
              .reset();
            getText("Raiffeisen Bank sends you some Bitcoins");
          }}
        />
        <mesh
          name="key_middle_right"
          geometry={nodes.key_middle_right.geometry}
          material={materials.tickets_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_middle_rightAction"]
              .setLoop(THREE.LoopOnce)
              .play()
              .reset();
            getText("Buy your dream trip tickets with Raiffeisen Bank");
          }}
        />
        <mesh
          name="key_upper_left"
          geometry={nodes.key_upper_left.geometry}
          material={materials.ruble_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_upper_leftAction"]
              .setLoop(THREE.LoopOnce)
              .play()
              .reset();
            getText("Deposit some rubles into your Raiffeisen Bank account");
          }}
        />
        <mesh
          name="key_upper_middle"
          geometry={nodes.key_upper_middle.geometry}
          material={materials.like_txtr}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_upper_middleAction"]
              .setLoop(THREE.LoopOnce)
              .play()
              .reset();
            getText("❤️ ❤️ ❤️");
          }}
        />
        <mesh
          name="key_upper_right"
          geometry={nodes.key_upper_right.geometry}
          material={materials.euro_txtr}
          rotation={[0.049, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            actions["key_upper_rightAction"]
              .setLoop(THREE.LoopOnce)
              .play()
              .reset();
            getText("Deposit some euros into your Raiffeisen Bank account");
          }}
        />
        <mesh
          name="base_inner"
          geometry={nodes.base_inner.geometry}
          material={materials.purple}
          rotation={[0.049, 0, 0]}
        />
        <mesh
          name="base_outer"
          geometry={nodes.base_outer.geometry}
          material={materials.darkgrey}
          rotation={[0.049, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/keyboard_animated.gltf");
