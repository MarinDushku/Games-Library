import './cover.css';

export default function Cover() {  
  return ( 
    <div className='cover'>
        <div className='coverTitle'>
            <h5>Creators</h5>
        </div>
        
        <div className='CreatorLogo'>
            <a href="https://github.com/MarinDushku" target="_blank" rel="noopener noreferrer">
                <div className="avatar-placeholder">MD</div>
            </a>
            <a href="https://github.com/NevinGuni" target="_blank" rel="noopener noreferrer">
                <div className="avatar-placeholder">NG</div>
            </a>
        </div>
    </div>
   );
}