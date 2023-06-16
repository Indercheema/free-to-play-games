import { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function Catalog() {
    const [charactersData, setCharactersData] = useState([]);
    const [buttonText, setButtonText] = useState("Sort By Name");

    const navigate = useNavigate();

    const characterUrl = `https://hp-api.onrender.com/api/characters`;

    const getCharacter = useCallback(async () => {
        try {
            const { data } = await axios.get(`${characterUrl}`);
            setCharactersData(data);
        } catch (error) {
            console.log(error);
        }
    }, [characterUrl]);

    const sortByName = () => {
        const sortedCharcters = [...charactersData].slice(0, 24).sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setCharactersData(sortedCharcters);
    };

    const sortByGender = () => {
        const sortedCharcters = [...charactersData].slice(0, 24).sort((a, b) => {
            return a.gender.localeCompare(b.gender);
        });
        setCharactersData(sortedCharcters);
    };


    const handleClick = () => {
        buttonText === "Sort By Name"
            ? setButtonText("Sort By Gender")
            : setButtonText("Sort By Name");

        if (buttonText === "Sort By Name") {
            sortByName();
        } else {
            sortByGender();
        }
    };

    useEffect(() => {
        getCharacter();
    }, [getCharacter])

    const getCharId = (id) => {
        navigate(`/${id}`);

    }
    return (
        <>
            <div className="btn">
                <button className="sort-btn" onClick={handleClick}>{buttonText}</button>
            </div>
            <div className="characters">
                {charactersData.slice(0, 24).map((game) => {
                    return (
                        <div>
                            <div className="charBox" onClick={() => getCharId(game.id)} >
                                <img src={game.image} className="charImg" />
                                <p className="charTitle">{game.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Catalog;  