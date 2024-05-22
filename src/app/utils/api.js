// -------------- CREATE --------------
export async function addWeather(weather){
    try {
        let response = await fetch("http://localhost:8000/weathers", 
            {
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(weather)
            })
            return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// -------------- READ ----------------
export async function getWeathers(){
    try {
        let response = await fetch("http://localhost:8000/weathers")
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

export async function getWeathersByCity(city){
    try{
        let response = await fetch(`http://localhost:8000/weathers?city=${city}`)
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

export async function getWeatherById(id){
    try{
        let response = await fetch(`http://localhost:8000/weathers?id=${id}`)
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

//------------------UPDATE----------------
export async function updateWeather(weather){
    try{
        let response = await fetch("http://localhost:8000/weathers/" + weather.id,
            {
                method: 'PUT',
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(weather)
            })
            return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// --------------------- DELETE ----------------------
export async function deleteWeather(id){
    try {
        let response = await fetch("http://localhost:8000/weathers/" + id,
            {
                method: 'DELETE'
            })
            return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}