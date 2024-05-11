import { GradientTexture, MeshDistortMaterial, useCursor } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";


const MeshDistortMaterials = () => {

    

    const [ hover, setHover ] = useState(false);
    useCursor(hover);

    const planeRef = useRef();

    useEffect(() => {
        if(hover) {
            planeRef.current.material.distort = 0.4;
        } else {
            planeRef.current.material.distort = 0;
        }
    }, [hover]);
  
  
    return (
    <>
    <mesh
    ref={planeRef}
    onPointerOver={() => setHover(true)}
    onPointerOut={() => setHover(false)}
    >
   <boxGeometry 
   args={[2, 3, 10, 10]} // aumentar as dimensões do plano para podermos ver a animação com mais clareza e os vertices.
   />

   <MeshDistortMaterial  // Este material distorce sua geometria e o resultado final será algo como uma animação ondulada.
   speed={1} // alterar a velocidade de distorção usando o atributo speed e o valor padrão é um, 
   distort={0} // Também podemos alterar a distorção usando o atributo distorcer e o valor padrão é 0,4.
   >

    <GradientTexture
     colors={["gray", "yellow"]}
     stops={[0.4, 1]} // precisamos usar o atributo stops. Em seguida, fornecemos um array para decidir quanto cada cor deve consumir ao colorir a malha e isso
    
    />
   </MeshDistortMaterial>
   </mesh>
    </>
  )
}

export default MeshDistortMaterials;
