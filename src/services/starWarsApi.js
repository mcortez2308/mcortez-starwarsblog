const urlBase = "https://www.swapi.tech/api";

export async function getCharacters() {
    try {
        let resultscharacter = [];
        const response = await fetch(`${urlBase}/people?page=2&limit=10`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        for (const item of data.results) {       
            const detailResponse = await fetch(item.url);
            const detailData = await detailResponse.json();
            if (!detailResponse.ok) {
                throw new Error(`HTTP error! status: ${detailResponse.status}`);
            }
            resultscharacter.push(detailData.result);
        }
        return resultscharacter; // Return the array of characters
    } catch (error) {
        console.error("Error fetching characters:", error);
        return []; // Return an empty array on error
    }
}

export async function getPlanets() {
    try {
        let resultsplanets = [];
        const response = await fetch(`${urlBase}/planets`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        for (const item of data.results) {       
            const detailResponse = await fetch(item.url);
            const detailData = await detailResponse.json();
            if (!detailResponse.ok) {
                throw new Error(`HTTP error! status: ${detailResponse.status}`);
            }
            resultsplanets.push(detailData.result);
        }
        return resultsplanets; // Return the array of planets
    } catch (error) {
        console.error("Error fetching planets:", error);
        return []; // Return an empty array on error
    }
}   

export async function getVehicles() {
    try {
        let resultsvehicles = [];
        const response = await fetch(`${urlBase}/vehicles`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        for (const item of data.results) {       
            const detailResponse = await fetch(item.url);
            const detailData = await detailResponse.json();
            if (!detailResponse.ok) {
                throw new Error(`HTTP error! status: ${detailResponse.status}`);
            }
            resultsvehicles.push(detailData.result);
        }
        return resultsvehicles; // Return the array of vehicles
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        return []; // Return an empty array on error
    }
}