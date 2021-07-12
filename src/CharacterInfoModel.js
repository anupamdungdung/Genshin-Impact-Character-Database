import React, { useState } from 'react';
import ReactDom from 'react-dom';
import fourStars from './assets/fourStars.png';
import fiveStars from './assets/fiveStars.png';
import './CharacterInfoModel.scss'

const CharacterInfoModal = ({ closeModal, toggleModal, name, image, title, birthday, weapon, rarity, vision }) => {

    if (!toggleModal) return null;
    else {
        return ReactDom.createPortal(
            <>
                
                <div class="fixed z-10 inset-0 overflow-y-auto content" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                        <div class="fixed inset-0  bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>

                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex">
                                <img src={image} className="modalImage rounded " alt="ModalImage"></img>
                                <div className="col-span-6 mx-2.5">
                                    <p className="mb-3 detailsText">{name}</p>
                                    <p className="mb-3 detailsText">Title: {title}</p>
                                    <p className="mb-3 detailsText">Rarity: {rarity == 4 ? <img className="fiveStars mt-3" src={fourStars} /> : <img className="fiveStars mt-3" src={fiveStars} />}</p>
                                    <p className="mb-3 detailsText">Vision: {vision}</p>
                                    <p className="mb-3 detailsText">Birthday: {birthday}</p>
                                    <p className="mb-3 detailsText">Weapon: {weapon}</p>
                                </div>

                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
                                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-900 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm modalButton" onClick={closeModal}>
                                    OK
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </>,
            document.getElementById('portal')
        )
    }

}

export default CharacterInfoModal;