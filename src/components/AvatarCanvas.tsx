import {Canvas} from "@react-three/fiber";
import {Avatar} from "./Avatar";

export const AvatarCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <Avatar />
    </Canvas>
  );
};
