import React,{useEffect,useState} from 'react';
import './Covid.css';


function Covid() {

    const [data,setData] = useState({});
    const getCovidData = async() => {
       const d = await fetch('https://disease.sh/v3/covid-19/countries');
        const response = await d.json();
        setData(response[94]);
        //console.log(response[94].active);
    }
    useEffect(()=>{
        getCovidData();
    },[])
  return (
    <div>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 Tracker</h2>
        <ul>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'><span>OUR</span>COUNTRY</p>
                        <p className='card__total card__name'>{data.country}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'><span>TOTAL</span>CONFIRMED</p>
                        <p className='card__total card__name'>{data.cases}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'><span>TOTAL</span>DEATH</p>
                        <p className='card__total card__name'>{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'><span>TOTAL</span>ACTIVE</p>
                        <p className='card__total card__name'>{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'><span>TOTAL</span>RECOVERED</p>
                        <p className='card__total card__name'>{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className='card__name'><span>RECOVERED</span>PER MILLION</p>
                        <p className='card__total card__name'>{data.recoveredPerOneMillion}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Covid