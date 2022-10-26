import Picture from "./Picture";

//if you wish to use information from the props object you must pass it through the function compnent
//it is pulling props as the array of data fromthe use effect on art.js


const Gallery = (props) => {

  console.log(`this is the props`, props);
  return (
    <section>
      <h2>A gallery of pictures</h2>
      <ul>
        {
          props.arrayOfArt.map((artObject) => {
            return <Picture artInfo={artObject} key={artObject.id}/> 
        })
        }
      </ul>
    </section>
  )
}

export default Gallery;