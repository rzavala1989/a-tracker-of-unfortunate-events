import Map from './components/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from './components/Loader';
import Header from './components/Header';

export default function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      await axios
        .get('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        .then((res) => {
          setEventData(res.data.events);
          setLoading(false);
        });
    };
    fetchEvents();
    console.log(eventData);
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}
