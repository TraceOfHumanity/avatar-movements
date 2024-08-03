import {useGLTF} from "@react-three/drei";

export const Avatar = () => {
  const avatar = useGLTF("/3dModels/x-bot.glb");

  console.log(avatar);

  return <group>
    <primitive object={avatar.scene} />
  </group>;
};
