import React from 'react';

const Planet = (props) => {

    return (
        <div>
           <table>
               <thead>
                   <tr>
                       <th>planetName</th>
                       <th>hostName</th>
                       <th>numberOfStars</th>
                       <th>numberOfPlanets</th>
                       <th>discoveryMethod</th>
                       <th>discoveryYear</th>
                       <th>discoveryFacility</th>
                       <th>solutionType</th>
                       <th>planetaryParameterReference</th>
                   </tr>
               </thead>
               <tbody>
               {
            props.planets.map(i => (<tr key={i.id}>
             <td>{i.planetName}</td>
            <td>{i.hostName}</td>
            <td>{i.numberOfStars}</td>
            <td>{i.numberOfPlanets}</td>
            <td>{i.discoveryMethod}</td>
            <td>{i.discoveryYear}</td>
            <td>{i.discoveryFacility}</td>
            <td>{i.solutionType}</td>
            <td>{i.planetaryParameterReference}</td>
            </tr>))
        }
               </tbody>
           </table>
        </div>
    )
} 

export default Planet;