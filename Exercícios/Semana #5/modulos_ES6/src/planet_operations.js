export const AU_IN_KILOMETERS = 149587870

/* 
  não estamos mais tratando formato de objeto e sim como constante direta
  fazendo assim, dois exports Nomeados
*/
export function convertAUtoKm(au) {
  return au * AU_IN_KILOMETERS
}