class Fetch {
    async getCurrent(input) {
        const myKey = "a009b3af0965f8e61ecf18d565c79616";

        // make request to url

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
        );

        const data = await response.json();

        console.log(data);

        return data;
    } 
}