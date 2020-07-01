import React, {useState} from 'react'
import Sidebar from '../shared/sidebar/Sidebar'
import Customers from './customers/Customers';
import Releases from './releases/Releases';
import Log from './log/Log';

const Container = () => {

    const [view, setView] = useState(1)

   const handleClick = num => {
        console.log('click ', num);
        setView(num)
      };

      let content 

      if (view === 1) {
          content = <Customers/>
      } else if (view === 2) {
          content = <Releases/>
      } else if (view === 3) {
          content = <Log/>
      }

    return (
        <div style={{display:'flex'}}>
                 <Sidebar handleClick={handleClick}/>
            <div style={{width:'100%', display:'flex', marginLeft:'2rem', height:'90vh', overflowY:'scroll'}}>
                {content}
            </div>
        </div>
    )
}

export default Container
