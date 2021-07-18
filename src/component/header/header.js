import './header.css';
// import Home from '../../assets/images/home-icon.svg';
// import SEARCH from '../../assets/images/search-icon.svg';
// import WATCHLIST from '../../assets/images/watchlist-icon.svg';
// import ORIGINALS from '../../assets/images/original-icon.svg';
// import MOVIES from '../../assets/images/movie-icon.svg';
// import SERIES from '../../assets/images/series-icon.svg';
import DisneyLogo from '../../assets/images/logo.svg';
import TvContent from '../TvContent/TvContent';
import { useState } from 'react';
import SearchBY from './SearchBY/SearchBY'
const Header = ()=>{
    const [searchValue,setSearchValue] = useState("")
    const [saveData,setSaveData] = useState();
    const handleSubmit = (event)=>{        
        event.preventDefault();
        fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
        .then(response => response.json())
        .then(data => {setSaveData(data)
        });
        setSearchValue("");
      }
    return<>
    <div className="Nav">
        <div className="NavLogo">
            <img src={DisneyLogo} alt="Disney+" />
        </div>
       
        {/* <div className="input-group">
            <input type="text" className="headerSearch" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div> */}

        <form onSubmit={handleSubmit}>
            <input type="text" className="headerSearch" placeholder="Search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            <button type="submit"  className="btn btn-outline-secondary">Search</button>
        </form>

        <div className="SignOut">
            <span className="btn btn-info" style={{letterSpacing:"0px"}}>Sign out</span>
            {/* <span className="DropDown">Sign out</span> */}
        </div>
        
    </div>
    <TvContent/>
    <SearchBY data={saveData}/>

    </>;
}

export default Header;

