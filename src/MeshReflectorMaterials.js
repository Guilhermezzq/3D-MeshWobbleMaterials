import { Environment, MeshReflectorMaterial } from "@react-three/drei"


const MeshReflectorMaterials = () => {
  return (
    <>
    <Environment 
      background
      files="./envMap/1.hdr"
      />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#F76E53" />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
        <planeGeometry args={[6, 6]} />


        <MeshReflectorMaterial  // Capacidade de refletir o que esta acima 
        resolution={512} // Quanto maior a resolução, melhor qualidade e menor desempenho e menor resolução, maior será o melhor desempenho e menor qualidade.
        color="gray"
        blur={[1000, 1000]} // Pirmeiro valor e  para largura e o segundo e para altura e se diminuir o valor aumenta o desfoque
        mixBlur={1}
        mirror={1} // Este atributo fará com que a malha simples comece a agir como um espelho.
        
        
        /> 
      </mesh>
    </>
  )
}

export default MeshReflectorMaterials;
