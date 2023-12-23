import { writable } from 'svelte/store';
export const sun = "https://cdn.icon-icons.com/icons2/3192/PNG/512/sunny_sun_cloud_weather_cloudy_icon_194267.png";
export const cloud = "https://cdn.icon-icons.com/icons2/571/PNG/512/clouds-outlined-weather-symbol_icon-icons.com_54695.png";
export const API_KEY = 'cb46e8f1ccee4ad4a4532da959402d1d';
export let data = writable({});
export let appTemp = writable(''), precip = writable(''), description = writable('');
export let windSpeed = writable(''), clouds = writable(''), cityName = writable('');

