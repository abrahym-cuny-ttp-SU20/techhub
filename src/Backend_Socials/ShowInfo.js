import React, { useState, useEffect} from 'react';

const ShowInfo=(props)=>{
    // divStyle = {
    //     backgroundColor: '#00FFFF'
    //   };


    
      const [socialinfo, setSocialInfo] = useState(false);
      useEffect(()=>{
        getSocialInfo();
      },[]);

      function getSocialInfo(){
        fetch('http://localhost:3001')
        .then(response=>{
          return response.text();
        })
        .then(data=>{
          setSocialInfo(data);
        });
      }

      function createSocialInfo(){
        let socialName=props.social;
        let userName=props.username;

        
        fetch('http://localhost:3001/socialinfo' , {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({socialName, userName}),
        })
          .then(response => {
            return response.text();
          })
          .then(data =>
            {alert(data);
            getSocialInfo();
          });
          
      }  
      function manCreateSocialInfo(){
        let socialName=prompt('Enter social name');
        let userName=prompt('Enter user name');
        
        
        fetch('http://localhost:3001/socialinfo' , {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({socialName, userName}),
        })
          .then(response => {
            return response.text();
          })
          .then(data =>
            {alert(data);
            getSocialInfo();
          });
          
      }  
      function updateHow(){
        props.auto? createSocialInfo:manCreateSocialInfo
      }
    return(
      <div>
        {socialinfo ? socialinfo : 'There is no merchant data available'}
        <br />
        <button onClick={updateHow}>Add merchant</button>
      </div>
      )
    }
  
   
  export default ShowInfo;