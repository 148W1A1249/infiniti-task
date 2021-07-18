import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css'



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy+ '-' + mm + '-' + dd  ;
var todayShowData;
fetch(`https://api.tvmaze.com/schedule/web?date=${today}`)
.then(response => response.json())
.then(data => {
    todayShowData=data
});


const Slideshow = () => {    
    // const [todayShow,setTodayShow]= useState(todayShowData)
    // useEffect(()=>{
    //     setTodayShow(todayShowData)
    // },[])
    return (
      <div className="slide-container">
        <Slide >
          {
              todayShowData.map((show,index)=>{
                  return <><div className="each-slide" key={index}>
                  <div className="slidImgCss" style={{'backgroundImage': `url(${show._embedded.show.image.original})`}}>
                      <div className="details">
                        <div >Name: {show._embedded.show.name}</div>
                        <div>
                            <span>Show Day: {show._embedded.show.schedule.days.map(obj=>obj+", ")}</span><br/>
                            <span>Show Time: {show._embedded.show.schedule.time}</span>
                        </div>
                        <div>Language: {show._embedded.show.language}</div>
                        <div>Genres: {show._embedded.show.genres.map(obj=>obj+", ")}</div>
                      </div>
                    
                  </div>
                </div></>
              })
          }
        </Slide>
      </div>
    )
}

export default Slideshow;