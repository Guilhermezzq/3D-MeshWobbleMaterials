import { OrbitControls } from "@react-three/drei";

import MeshReflectorMaterials from "./MeshReflectorMaterials";
import MeshWobbleMaterials from "./MeshWobbleMaterials";
import MeshDistortMaterials from "./MeshDistortMaterials";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      

      {/* <MeshReflectorMaterials /> */}
      <MeshWobbleMaterials />
      {/* <MeshDistortMaterials /> */}




    </>
  );
};

export default Scene;
