// page.js

import React, { useState } from 'react';
import TempleSearch from '/Users/tomokazumatsushita/Temple_Shrine_App/TempleApp/frontend/components/TempleSearch';

const Page = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div>
      <h1>Temple Search Page</h1>
      <TempleSearch onSearch={handleSearch} />
      <div className="search-results">
        <ul>
          {searchResults.map((result) => (
            <li key={result[1]}>
              <p>Title: {result[2]}</p>
              <p>Latitude: {result[3]}</p>
              <p>Longitude: {result[4]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;

// // // pages/index.js
// // import { useEffect, useState } from 'react';
// // import TempleSearch from '../components/TempleSearch';

// // const HomePage = () => {
// //   const [temples, setTemples] = useState([]);
// //   const [selectedTemple, setSelectedTemple] = useState(null);

// //   const handleSearch = async (templeName) => {
// //     try {
// //       const response = await fetch(`http://127.0.0.1:5000/temples/search?query=${encodeURIComponent(templeName)}`);
// //       if (response.ok) {
// //         const data = await response.json();
// //         setTemples(data);
// //         setSelectedTemple(null); // Clear selected temple when new search is performed
// //       } else {
// //         console.error('Failed to fetch temples:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error during temple search:', error.message);
// //     }
// //   };

// //   const handleTempleClick = (temple) => {
// //     // Set the selected temple when clicked
// //     setSelectedTemple(temple);
// //   };

// //   return (
// //     <div>
// //       <h1>Temple Search App</h1>
// //       <TempleSearch onSearch={handleSearch} />
// //       <div className="search-results">
// //         <ul>
// //           {temples.map((temple) => (
// //             <li key={temple.href} onClick={() => handleTempleClick(temple)}>
// //               <a href={`/temple/${encodeURIComponent(temple.href)}`}>{temple.title}</a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       {selectedTemple && (
// //         <div className="selected-temple">
// //           <h2>Selected Temple: {selectedTemple.title}</h2>
// //           <p>Latitude: {selectedTemple.latitude}</p>
// //           <p>Longitude: {selectedTemple.longitude}</p>
// //           {/* Add more details as needed */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HomePage;
// // HomePage.js
// import { useEffect, useState } from 'react';
// import TempleSearch from '../components/TempleSearch';

// const HomePage = () => {
//   const [temples, setTemples] = useState([]);
//   const [selectedTemple, setSelectedTemple] = useState(null);

//   const handleSearch = (searchResult) => {
//     setTemples(searchResult);
//     setSelectedTemple(null); // Clear selected temple when new search is performed
//   };

//   const handleTempleClick = (temple) => {
//     // Set the selected temple when clicked
//     setSelectedTemple(temple);
//   };

//   return (
//     <div>
//       <h1>Temple Search App</h1>
//       <TempleSearch onSearch={handleSearch} />
//       <div className="search-results">
//         <ul>
//           {temples.map((temple) => (
//             <li key={temple.href} onClick={() => handleTempleClick(temple)}>
//               <a href={`/temple/${encodeURIComponent(temple.href)}`}>{temple.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedTemple && (
//         <div className="selected-temple">
//           <h2>Selected Temple: {selectedTemple.title}</h2>
//           <p>Latitude: {selectedTemple.latitude}</p>
//           <p>Longitude: {selectedTemple.longitude}</p>
//           {/* Add more details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;
