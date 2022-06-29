export async function getNeos() {
    //fetch, relembrando, retorna uma promise e no resolve dessa promise, 
    //retorna o que a API está retornando pra gente
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    const result = await response.json()
    return result["near_earth_objects"]
}