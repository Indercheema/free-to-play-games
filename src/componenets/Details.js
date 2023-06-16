import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from 'axios';

function Details() {
    const [name, setName] = useState('');
    const [actor, setActor] = useState('');
    const [birthday, setBirthday] = useState('');
    const [img, setImg] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [house, setHouse] = useState('');
    const [ancestry, setAncestry] = useState('');
    const [eyeColour, setEyeColour] = useState('');
    const [hairColour, setHairColour] = useState('');


    const { id } = useParams();
    let userEndpoint = `https://hp-api.onrender.com/api/character/${id}`;

    useEffect(() => {
        const getData = async () => {
            const userData = await axios.get(`${userEndpoint}`);
            console.log(userData)
            setName(userData.data[0].name);
            setActor(userData.data[0].actor);
            setBirthday(userData.data[0].dateOfBirth);
            setImg(userData.data[0].image);
            setSpecies(userData.data[0].species)
            setGender(userData.data[0].gender)
            setHouse(userData.data[0].house)
            setAncestry(userData.data[0].ancestry)
            setEyeColour(userData.data[0].eyeColour)
            setHairColour(userData.data[0].hairColour)

        }

        getData();
    }, []);
    return (
        <section className='detail-section'>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <div className='character'>
                <div>
                    <img src={img} className="movieImgDetail" />
                </div>
                <div className='info'>
                    <h2> Name : {name ? `${name}` : "Not Available"}</h2>
                    <p>Actor : {actor ? `${actor}` : "Not Available"}</p>
                    <p>Birthday : {birthday ? `${birthday}` : "Not Available"}</p>
                    <p>Species : {species ? `${species}` : "Not Available"}</p>
                    <p>Gender : {gender ? `${gender}` : "Not Available"}</p>
                    <p>House : {house ? `${house}` : "Not Available"}</p>
                    <p>Ancestry : {ancestry ? `${ancestry}` : "Not Available"}</p>
                    <p>Eye Colour : {eyeColour ? `${eyeColour}` : "Not Available"}</p>
                    <p>Hair Colour : {hairColour ? `${hairColour}` : "Not Available"}</p>
                    <button className='info-btn'>MORE INFO</button>
                </div>
            </div>
        </section>

    )
}

export default Details;