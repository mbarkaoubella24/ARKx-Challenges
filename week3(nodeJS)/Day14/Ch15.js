const fs = require('fs').promises;
const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];
async function fetchData(latitude, longitude) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        } else {
            const data = await res.json();
            return data.current_weather.temperature;
        }
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
}
async function deleteFile(filename) {
    try {
        await fs.unlink(filename);
    } catch (error) {

    }
}
async function writeTempe(cityName, temperature) {
    const filename = `${cityName}.txt`;
    try {
        await fs.writeFile(filename, `Temperature for ${cityName} : ${temperature}°C`);
        console.log(`Temperature for ${cityName} has been written to ${filename}`);
    } catch (error) {
        throw new Error(`Error writing temperature to file: ${error.message}`);
    }
}
async function main() {
    try {
        const cityName = (await fs.readFile('input.txt', 'utf-8')).trim();
        const city = cities.find(c => c.name === cityName);
        if (!city) {
            throw new Error(`City '${cityName}' not found in the list.`);
        }
        const temperature = await fetchData(city.lat, city.lng);
        await deleteFile(`${cityName}.txt`);
        await writeTempe(cityName, temperature);
    } catch (error) {
        console.error(error.message);
    }
}
main();