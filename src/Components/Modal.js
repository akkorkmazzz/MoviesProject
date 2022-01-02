import React from 'react';
//SASS
import '../Style/modal.scss';

const Modal = ({ setOpenModal, movieTitle, moviePoster, movieYear, movieType, movieImdbID }) => {

    return (
        <div className="modal-main-container">
          <div className="modal-container">
            <div className="close-button-container">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div>
                <span>Movie Detail</span>
                <div className='title-hr' />
            </div>
            <div className='content-container'>
                <div className='left-content-container'>
                    <div className="first-container">
                        <span>Title</span>
                        <p>{movieTitle}</p>

                    </div>
                    <div className="second-container">
                        <span>Year</span>
                        <p>{movieYear}</p>
                    </div>
                    <div className="second-container">
                        <span>Type</span>
                        <p>{movieType}</p>
                    </div>
                    <div className="second-container">
                        <span>Director</span>
                        <p>Christopher Nolan</p>
                    </div>
                    <div className="second-container">
                        <span>Actors</span>
                        <p>Christian Bale, Cillian Murphy, Katie Holmes</p>
                    </div>
                    <div className="second-container">
                        <span>IMDB</span>
                        <p>{movieImdbID}</p>
                    </div>
                </div>
                <div>
                    <img src={moviePoster} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
