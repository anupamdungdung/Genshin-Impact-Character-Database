import React, { useState,useContext } from 'react';
import CharacterInfoModal from './CharacterInfoModel';
import './CharacterCard.scss'
import { CharacterData } from './Character';

const CharacterCard = (props) => {
    const [toggleModal, setToggleModal] = useState(false);
    const context=useContext(CharacterData);
   

    const setToggle = () => {
        setToggleModal(!toggleModal);
    }

    
    return (
        <figure className="image-block  inline-block text-center">
            <img className="rounded-xl characterImage " src={context.imageUrl} alt={context.name}></img>
            <figcaption className="figurecaption">
                <h2 className=" mb-2">{context.name}</h2>
                <p className="">{context.description}</p>
                <button className="shadow kmbutton" onClick={setToggle}>Know More</button>
                
                <CharacterInfoModal toggleModal={toggleModal} closeModal={setToggle}
                />
                

            </figcaption>

        </figure>
    )
}

export default CharacterCard;