import React from 'react'
import myimg from './logo.svg' ;
import './Aside.css';

const Asidebar = () => {
  return (
    <div className='aside'>
      <aside className='full-aside'>
        <div className='aside-header'>
       <img src={myimg}></img>
       <h5>Physics Wallah</h5>
       </div>
       <div>
       <p className='info'>UPDATE ACDEMIC INFO &gt;</p>
       </div>
       <hr></hr>
       <ul className='list'>
        <li className='first-li'><img className='list-icon' src='./home.svg'></img>Home</li>
        <li><img className='list-icon' src='./Batches.svg'></img>Batches</li>
        <li><img className='list-icon' src='./literature.svg'></img>Library</li>
        <li><img className='list-icon' src='./Testseries.svg'></img>Test series</li>
        <li><img className='list-icon' src='./pwstore.svg'></img>PW store</li>
        <li><img className='list-icon' src='./feeds.svg'></img>Feed</li>
        <li><img className='list-icon' src='./bookmark.svg'></img>Bookmarks</li>
        <li><img className='list-icon' src='./wallet.svg'></img>Notifications</li>
        <li><img className='list-icon' src='./offers.svg'></img>Offfers</li>
        <li><img className='list-icon' src='./share.svg'></img>Refer&Earn</li>
        <li><img className='list-icon' src='./mywallet.svg'></img>My Wallet</li>
       </ul>
       <hr></hr>
       <a  className ='see-more-link' href='#'>see more<img src='./dropdown.svg'></img></a>
       </aside>
  </div>
  )
}

export default Asidebar;