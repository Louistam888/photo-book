import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";

const Art = () => {
  console.log("rendering")
  // initiatlize state to keep track of whether the gallery is visble or not

  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  // initiatlicze a state for API data from reichsmuseum

  const [art, setArt] = useState([]);

  //call API oncecomponent has been mounted to the DOM aka run side effect 

  useEffect(()=> { 
    //using axios lets make a request to our API 

    axios({
      url: "https://www.rijksmuseum.nl/api/en/collection",
      params: {
        imgonly: true,
        key: "QYr38XnD",
        toppieces:true 
      }
    }).then((art)=> {
      //once data from api is returned, save it within the state
      //use dot notation to only save array of art objects within state

      console.log(art)
      setArt(art.data.artObjects);
    })
  }, [] );

  //define an event handler which updates the isgalleryvisible state to be the opposite boolean value 
  const handleClick =()=> {
    setIsGalleryVisible(!isGalleryVisible)
  }

  return (
    <section>
      <h2>
                {
                    isGalleryVisible
                        ? 'Wow this is a beauteous gallery wall :star-struck:'
                        : 'Ok but would you like to actually see some art???'
                }
    </h2>

          {/* This text is inaccessible! It would be better to do this styling via CSS */}
          <button onClick={handleClick}>
              {
                  isGalleryVisible
                      ? `I've seen enough of this art! Pls hide it`
                      : 'Click here for :sparkles: a r t :sparkles:'
              }
            </button>

          {
            isGalleryVisible 

            //pass array of arts that lives within the art state variable from this compnent down to the gallery component 
            ? <Gallery arrayOfArt = {art} />
            : null

          
          }


    </section>
  )
}

export default Art;