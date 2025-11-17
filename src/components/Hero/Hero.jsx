import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Yakeeni banayein ke yeh files inhi naam se assets folder me mojood hon
import badgeIcon from '../../assets/images/qr-code.png'; 
import video1 from '../../assets/videos/card-video1.mp4';
import video2 from '../../assets/videos/card-video2.mp4';
import video3 from '../../assets/videos/card-video3.mp4';
import video4 from '../../assets/videos/card-video4.mp4';

const videoCardsData = [
    { id: 1, videoSrc: video1 },
    { id: 2, videoSrc: video2 },
    { id: 3, videoSrc: video3 },
    { id: 4, videoSrc: video4 },
];

const Hero = () => {
    const [activeTab, setActiveTab] = useState('buy');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const videoRefs = useRef([]);
    const popularSearches = ['Palm Jebel Ali', 'Downtown Dubai', 'Business Bay', 'Dubai Marina'];
    const searchContainerRef = useRef(null);

    useEffect(() => {
        videoRefs.current.forEach((videoEl, index) => {
            if (videoEl) {
                if (index === hoveredVideo) {
                    videoEl.play().catch(error => console.log("Video play failed:", error));
                } else {
                    videoEl.pause();
                    videoEl.currentTime = 0;
                }
            }
        });
    }, [hoveredVideo]);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="badge">
                    <img src={badgeIcon} alt="No. 1 Agency Badge" />
                    <span>No. 1 agency in Dubai</span>
                </div>
                <h1>Find the Right Home</h1>
                <div className="toggle-buttons">
                    <button className={`toggle-btn ${activeTab === 'rent' ? 'active' : ''}`} onClick={() => setActiveTab('rent')}>Rent</button>
                    <button className={`toggle-btn ${activeTab === 'buy' ? 'active' : ''}`} onClick={() => setActiveTab('buy')}>Buy</button>
                    <button className={`toggle-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects</button>
                </div>
                <div className="search-container" ref={searchContainerRef}>
                    <div className="search-bar">
                        <input type="text" placeholder="Search by area or project name" onFocus={() => setIsSearchFocused(true)} />
                        <button className="search-btn">Search</button>
                    </div>
                    {isSearchFocused && (
                        <div className="search-dropdown">
                            <h5>Popular searches</h5>
                            <ul>{popularSearches.map(location => (<li key={location}><FaMapMarkerAlt /> {location}</li>))}</ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="video-cards-container">
                {videoCardsData.map(card => (
                    <div 
                        className="video-card" 
                        key={card.id}
                        onMouseEnter={() => setHoveredVideo(card.id)}
                        onMouseLeave={() => setHoveredVideo(null)}
                    >
                        <video
                            ref={el => videoRefs.current[card.id] = el}
                            src={card.videoSrc}
                            loop
                            muted
                            playsInline
                            controls={hoveredVideo === card.id}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;