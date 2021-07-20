class GotService {
    constructor() {
            this.apiKey = 'd9abf126260944d17f589065d731cc42'
            this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
    }
    async getResource(item) {
        const res = await fetch(`${this.baseUrl}?units=metric&q=${item}&appid=${this.apiKey}`)
        console.log(`${this.baseUrl}?units=metric&q=${item}&appid=${this.apiKey}`)
        return await res.json();
    }
    getData = (city) =>{
        return this.getResource(city)
    }
}
export default GotService