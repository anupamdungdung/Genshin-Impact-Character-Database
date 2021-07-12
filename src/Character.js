import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Character.scss';
import PreLoader from './LoadingScreen';
import CharacterCard from './CharacterCard';
import Nav from './Nav';


const Character = (props) => {

    const [charactersList, setcharactersList] = useState([])
    const [loading, setLoading] = useState(false);

    const characterData = async () => {
        try {
            const res = await axios.get("https://genshin-impact-character-api.herokuapp.com/characters");
            setcharactersList(res.data);
            // console.log(res);


        }
        catch (err) {
            console.log(err);
        }

    }
    //This method is used to as a lifecycle method. The [] denotes that it will run only one time when the page is rendered
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        characterData([]);


    }, []);

    const characterCards = charactersList.map((character, i) => {
        return <CharacterCard image={character.imageUrl} name={character.name} description={character.description} title={character.title} birthday={character.birthday} weapon={character.weapon} rarity={character.rarity} vision={character.vision}/>
    });

    return <div className="body">

        {
            loading ? (<PreLoader />) : (<div>
                <Nav />
                <div className="text-center characterlist ">
                    
                    {characterCards}

                </div>

            </div>)
        }


    </div>
}

export default Character;