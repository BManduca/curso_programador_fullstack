export async function getSentryObjects() {
    //fetch, relembrando, retorna uma promise e no resolve dessa promise, 
    //retorna o que a API está retornando pra gente
    let response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY")
    let result = await response.json()
    return result["sentry_objects"]
}