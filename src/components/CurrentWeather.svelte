<script>
    import Loading from "./Loading.svelte";
    import { onMount } from "svelte";
    import {data, cloud, sun, API_KEY, appTemp, cityName, precip, description, clouds, windSpeed} from "../store/store";

    
    onMount(async () => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=Guadalajara`);
        data.set(await response.json());
        cityName.set($data.data[0].city_name);
        appTemp.set($data.data[0].temp);
        console.log($appTemp);
        precip.set($data.data[0].precip);
        console.log($precip);
        description.set($data.data[0].weather.description);
        windSpeed.set($data.data[0].wind_spd);
        clouds.set($data.data[0].clouds);
        console.log($data);
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
            {#if $cityName !== undefined}
                <h1>{$cityName}</h1>
                <span>
                    <p class="CurrentWeather-grades">{$appTemp} C°</p>
                    {#if $clouds < 50 && $precip === 0}
                        <img src={sun} alt="sun">
                    {:else}
                        <img src={cloud} alt="clouds">
                    {/if}
                    <h3>{$description}</h3>
                    <span class="CurrentWeather-info">
                        <i class="fa-solid fa-cloud-rain"></i>
                        <p>Precipitation: {$precip}</p>
                        <i class="fa-solid fa-wind"></i>
                        <p>Wind speed: {$windSpeed} m/s</p>
                    </span>
                </span>
            {:else}
                <Loading/>
            {/if}
        </div>
    </div>
</div>