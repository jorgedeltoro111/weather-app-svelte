<script>
    import { API_KEY, data, appTemp, cityName, precip, description, clouds, windSpeed} from "../store/store";
    let city = '';
    
    async function searchCity(event) {
        console.log(city);
        event.preventDefault();

        let apiUrl;

        if (city !== '') {
            apiUrl = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=${city}`;
        } else {
            apiUrl = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=Guadalajara`;
        }

        const response = await fetch(apiUrl);
        data.set(await response.json());
        cityName.set($data.data[0].city_name);
        appTemp.set($data.data[0].temp);
        precip.set(data.data[0].precip);
        description.set($data.data[0].weather.description);
        windSpeed.set($data.data[0].wind_spd);
        clouds.set($data.data[0].clouds);
        console.log('this is the data object', $data);
        
    }

</script>
<style>
    .navbar-brand{
        display: flex;
        align-items: center;
    }
    h1{
        margin-left: 30px;
        color: white;
    }
    img{
        width: 110px;
        height: 110px;  
    }
    .navbar{
        width: 100%;
        top: 0;
        z-index: 1000;
        background: linear-gradient(to right, #000000, #737373);
    }
    form{
        align-items: end;
        margin-right: 15%;
    }
    input{
        border-radius: 25px;
        font-size:x-large;
        padding: 5px;
        border-color: rgb(202, 195, 195);
        border-width: 2px;
    }
    .search-form{
        margin-left: auto; 
        display: flex;
        align-items: center;
    }
    .search-input::placeholder{
        color: rgb(142, 136, 142);
    }
    
</style>
<div class="Header">
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="https">
            <img src="https://i.pinimg.com/originals/97/ef/55/97ef55ab22265ee822cef6fcdeea9685.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
            <h1>Weather</h1>
        </a>
        <form on:submit={searchCity} class="search-form">
            <input type="text" placeholder="🔍︎ Search your city" class="search-input" bind:value={city}>
        </form>
    </nav>
</div>