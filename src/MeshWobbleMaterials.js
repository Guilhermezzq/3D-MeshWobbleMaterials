import { MeshWobbleMaterial } from "@react-three/drei"




const MeshWobbleMaterials = () => {
 
 
 
    return (
    <>
    <mesh>
        <boxGeometry 
        args={[1, 1, 1, 12, 12, 12]}
        // aumentar o número de vértices aumentando os segmentos
        />
        
        <MeshWobbleMaterial  //Este tipo de material tornará o material gelatinoso.
        color='skyblue'
        factor={3} // a flexão ou oscilação aumentará.
        speed={0.4} // podemos aumentar ou diminuir a velocidade usando o atributo speed e o valor padrão é um.

        
        
        />
        
        
    </mesh>
    
    </>
  )
}

export default MeshWobbleMaterials
