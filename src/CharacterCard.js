import React, { useState } from 'react';
import CharacterInfoModal from './CharacterInfoModel';
import './CharacterCard.scss'

const CharacterCard = (props) => {
    const [toggleModal, setToggleModal] = useState(false);
    console.log(typeof(props.rarity));
    const setToggle = () => {
        setToggleModal(!toggleModal);
    }
    return (
        <figure className="image-block  inline-block text-center">
            <img className="rounded-xl characterImage " src={props.image} alt={props.name}></img>
            <figcaption className="figurecaption">
                <h2 className=" mb-2">{props.name}</h2>
                <p className="">{props.description}</p>
                <button className="shadow kmbutton" onClick={setToggle}>Know More</button>
                
                <CharacterInfoModal toggleModal={toggleModal} closeModal={setToggle}
                image={props.image} name={props.name} description={props.description} title={props.title} birthday={props.birthday} weapon={props.weapon} rarity={props.rarity} vision={props.vision}/>
                

            </figcaption>

        </figure>
    )
}

export default CharacterCard;