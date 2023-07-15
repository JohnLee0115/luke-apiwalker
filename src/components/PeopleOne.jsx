import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const PeopleOne = () => {
    const {personid} = useParams();
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [mass, setMass] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [skinColor, setSkinColor] = useState("");

    const setData = (data) => {
        setName(data.name);
        setHeight(data.height);
        setMass(data.mass);
        setHairColor(data.hair_color);
        setSkinColor(data.skin_color);

    }

    const getPersonData = () => {
        axios.get(`https://swapi.dev/api/people/${personid}`)
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    }

    useEffect(getPersonData, [])

    return (
        <>
            <h1>{name}</h1>
            <ul>
                <li>Height : {height} cm</li>
                <li>Mass: {mass} kg</li>
                <li>Hair Color: {hairColor}</li>
                <li>Skin Color: {skinColor}</li>
            </ul>
        </>
    )
}

export default PeopleOne