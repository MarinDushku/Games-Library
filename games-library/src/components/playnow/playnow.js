import React, { useState, useRef } from 'react';
import { newsData } from './playnowdata.js';
import './news.css';
import background from '../../images/newsbackground.jpg';

export default function News() {

    const [hoveredNews, setHoveredNews] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
   
};