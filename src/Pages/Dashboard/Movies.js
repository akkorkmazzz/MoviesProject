import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {count} from '../../store/actions/counter';
import {movieName} from '../../store/actions/movieName';
import axios from 'axios';
//Component
import ReactPaginate from "react-paginate";
import Modal from '../../Components/Modal';
//PNG
import Search from '../../images/dashboard/2.png';
//SASS
import '../../Style/movies.scss';

const Movies = () => {

    const dispatch = useDispatch();

    const [movieDatas, setMovieDatas] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const [filterMovieName, setFilterMovieName] = useState("Batman");

    const getMoviesFromServer = () => {
        axios.get(`http://www.omdbapi.com/?s=${filterMovieName}&apikey=43caa398`)
        .then(response => {
            setMovieDatas(response.data.Search.slice(0, 50));
        })
        .catch(err => alert(err));
    }

    const pageCount = Math.ceil(movieDatas.length / usersPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    useEffect(() => {
        getMoviesFromServer();
    },[])

    const [searchDate, setSearchDate] = useState("");
    const searchMovieName = (e) => {
        setFilterMovieName(e.target.value);
    }
    const searchMovieDate = (e) => {
        setSearchDate(e.target.value);
    }
    
    const searchMovies = () => {
        if(searchDate === ""){
            getMoviesFromServer();
        }else{
            axios.get(`http://www.omdbapi.com/?s=${filterMovieName}&apikey=43caa398`)
            .then(response => {
            setMovieDatas(response.data.Search.filter((obj) => obj.Year === searchDate).slice(0, 50));
        })
        .catch(err => alert(err));
        }
    }
    const [modalOpen, setModalOpen] = useState(false);

    const [movieTitle, setMovieTitle] = useState();
    const [moviePoster, setMoviePoster] = useState();
    const [movieYear, setMovieYear] = useState();
    const [movieType, setMovieType] = useState();
    const [movieImdbID, setMovieImdbID] = useState();
    const openModal = (datas) => {
        setModalOpen(true);
        setMovieTitle(datas.Title);
        setMoviePoster(datas.Poster);
        setMovieYear(datas.Year);
        setMovieType(datas.Type);
        setMovieImdbID(datas.imdbID);
        dispatch(count());
        dispatch(movieName(datas.Title));
    }

    const movies = movieDatas
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((datas, index) => {
      return (
        <div key={index} className='movies-content-container'>
            <div className='movies-content'>
                <div className='content-nn'>
                    <div className='content-number'>
                        <span>{index+1}</span>
                    </div>
                    <div onClick={() => openModal(datas)} className='content-name'>
                        <span>{datas.Title}</span>
                    </div>
                </div>
                <div className='content-and-info-container'>
                    <div className='content-year'>
                        <span>{datas.Year}</span>
                    </div>
                    <div className='content-info'>
                        <span>{datas.imdbID}</span>
                    </div>
                </div>
            </div>
            <div className='movies-border' />
        </div>
    )});

    return (
        <div className='movies-container'>
            {
                modalOpen && <Modal 
                    movieTitle={movieTitle} 
                    moviePoster={moviePoster}
                    movieYear={movieYear}
                    movieType={movieType}
                    movieImdbID={movieImdbID}
                    setOpenModal={setModalOpen} 
            />
            }
            <div className='movies-title-cont'>
                <div className='left-item'>
                    <h4 className="header-title">Movies</h4>
                </div>
                <div className='first-search'>
                    <input placeholder='Batman' type="search" onChange={searchMovieName} />
                    <img src={Search} alt="search"/>
                </div>
                <div className='second-search'>
                    <input placeholder='Year' type="search" onChange={searchMovieDate} />
                    <img type="number" src={Search} alt="search"/>
                </div>
                <div className='movies-button-container'>
                    <button onClick={searchMovies}>
                        <span>Search</span>
                    </button>
                </div>
            </div>
            <div className='movies-content-scrollbar'>
                {movies}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
            
        </div>
    )
}

export default Movies;
