// Song.jsx
import "./Song.css"
import React, { useState } from 'react';

const Song = ({ onSelect, searchQuery}) => {
 
    const cardData = [
        {
            title: 'S3BZS - MONTAGEM',
            imageUrl: './S3BZS - MONTAGEM - PR PHUNK.jpg',
            audioUrl: 'Montagem(PaglaSongs).mp3'
        },
        {
            title: 'FLUXXWAVE',
            imageUrl: './fluxwave.jpeg',
            audioUrl: 'Fluxxwave_128-(DJPunjab).mp3'
        },
        {
            title: 'Drift-Phonk',
            imageUrl: './Drift-Phonk.jpeg',
            audioUrl: 'drift-phonk-200108.mp3'
        },
        {
            title: 'Amen-Phonk',
            imageUrl: './Amen-Phonk.jpeg',
            audioUrl: 'amen-phonk-soundtrack-161543.mp3'
        }
    ];
    const [selectedSong, setSelectedSong] = useState(null);

    
    const filteredSongs = cardData.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardClick = (songData) => {
        onSelect(songData); 
    };

    return (

        <div className="container">
            <div className="side-bar">
                <div className="list-holder">
                    <li className='li'>Browse</li>
                    <div className="sli">
                        <li className='li'>New Releases</li>
                        <li className='li'>Top Charts</li>
                        <li className='li'>New Releases</li>
                        <li className='li'>Podcast</li>
                        <li className='li'>Top Artists</li>
                        <li className='li'>Radio</li>

                    </div>
                    <li className='li'>Library</li>
                    <div className="sli">
                        <li className='li'>History</li>
                        <li className='li'>Liked Songs</li>
                        <li className='li'>Albums</li>
                        <li className='li'>Podcast</li>
                        <li className='li'>Artists</li>
                    </div>
                </div>
            </div>
            <div className='main'>
            
                {cardData.map((card, index) => (
                    <div key={index} className='card' onClick={() => handleCardClick(card)}>
                        <div className="imgholder">
                            <img src={card.imageUrl} alt="" />
                        </div>
                        <div className="dataholder">
                            {card.title}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Song;



