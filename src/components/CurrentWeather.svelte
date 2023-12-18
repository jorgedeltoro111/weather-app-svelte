<script>
    import { onMount } from "svelte";
    import Loading from "./Loading.svelte";
    const API_KEY = 'cb46e8f1ccee4ad4a4532da959402d1d';
    let data, city, appTemp, description, windSpeed, precipitation, clouds;
    const sun = "https://cdn.icon-icons.com/icons2/3192/PNG/512/sunny_sun_cloud_weather_cloudy_icon_194267.png";
    const cloud = "https://cdn.icon-icons.com/icons2/571/PNG/512/clouds-outlined-weather-symbol_icon-icons.com_54695.png";
    onMount(async()=>{
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=Guadalajara&key=${API_KEY}`)
        data = await response.json();
        city = data.data[0].city_name; 
        appTemp = data.data[0].temp;
        description = data.data[0].weather.description;
        windSpeed = data.data[0].wind_spd;
        precipitation = data.data[0].precip;
        clouds = data.data[0].clouds;
        console.log(data);
    });
</script>
<style>
    img{
        width: 20%;
        height: 20%;
        margin: 10px;
    }
    h1{
        color: black;
        font-family: 'Noto Sans';
    }
    .CurrentWeather-container{
        margin-left: 10%;
        margin-top: 3%;
    }
    .CurrentWeather-grades{
        font-family: 'Noto Sans';
        font-size: 8em;
        display: inline-block;
    }
    .CurrentWeather-info{
        display: flex;
    }
    i{
        margin: 10px;
    }
    p{
        font-size: 20px;
    }
    
</style>
<div class="CurrentWeather">
    <div class="CurrentWeather-container">
        <div class="CurrentWeather-content">
            {#if city !== undefined}
                <h1>{city}</h1>
                <span>
                    <p class="CurrentWeather-grades">{appTemp}</p>\
                    {#if clouds < 50 && precipitation === 0}
                        <img src={sun} alt="Sun">
                    {:else}
                        <img src={cloud} alt="clouds">
                    {/if}
                    <h3>{description}</h3>
                    <span class="CurrentWeather-info">
                        <i class="fa-solid fa-cloud-rain"></i>
                        <p>Precipitation: {precipitation}</p>
                        <i class="fa-solid fa-wind"></i>
                        <p>Wind speed: {windSpeed} m/s</p>
                    </span>
                </span>
            {:else}
                <Loading/>
            {/if}
        </div>
    </div>
</div>