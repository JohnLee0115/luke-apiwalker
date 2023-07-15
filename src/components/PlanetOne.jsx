import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PlanetOne = () => {
    const {planetid} = useParams();
    const [name, setName] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [sufaceWater, setSurfaceWater] = useState("");
    const [population, setPopulation] = useState("");

    const setPlanetData = (data) => {
        setName(data.name);
        setClimate(data.climate);
        setTerrain(data.terrain);
        setPopulation(data.population);
        data.surface_water === '1'?
            setSurfaceWater("true"):
            setSurfaceWater("false")
    }

    const getPlanetData = () => {
        axios.get(`https://swapi.dev/api/planets/${planetid}`)
            .then(res=>setPlanetData(res.data))
            .catch(err=>console.log(err))
    }

    useEffect(getPlanetData, [])

    return (
        <>
            <h1>{name}</h1>
            <ul>
                <li>Climate: {climate}</li>
                <li>Terrain: {terrain}</li>
                <li>Surface Water: {sufaceWater}</li>
                <li>Population: {population}</li>
            </ul>
        </>
    )
}

export default PlanetOne