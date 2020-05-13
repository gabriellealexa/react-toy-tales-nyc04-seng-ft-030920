import React from 'react';
import ToyCard from './ToyCard'



const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      { props.toyList.map((toy) => {
          return <ToyCard 
            key={ toy.id }
            name={ toy.name }
            image={ toy.image }
            likes={ toy.likes }
          />
      } ) }
    </div>
  );
}

export default ToyContainer;
