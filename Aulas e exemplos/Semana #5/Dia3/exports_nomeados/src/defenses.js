// outra forma de fazer o export nomeado => export const laserDefenses = ["Escudos Defletores", "Arma anti-laser"]
const laserDefenses = ["Escudos Defletores", "Arma anti-laser"]
// outra forma de fazer o export nomeado => export const steelDefenses = ["Escudos de Aço"]
const steelDefenses = ["Escudos de Aço"]

// semelhantes com desconstrução de objetos
export {
  laserDefenses as laserDef, steelDefenses
}

export default ["Escudo repulsor"]