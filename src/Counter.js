import { useState} from "react";

const Counter = () => {
  //initiatize state to track number of likes 

  const [likesCount, setLikesCount] = useState(0);

//define event handler which will pdate state when called 
const handleClick = () => {
  setLikesCount(likesCount + 1);

// ATTEMPTS TO MUTATE STATE DIRECTLY WITHIN THE FUNCTION ARGUMENT (doesn't work)
// setLikesCount(likesCount++) --> setLikesCount(likesCounts = likesCount + 1)

// LEAVES THE STATE UPDATE TO THE FUNCTION BY PASSING JUST THE ARGUMENT (does work)
// setLikesCount(likesCounts + 1)


}

  return (
    <section>
      <p>This page has been liked {likesCount} times</p>
      <button onClick={handleClick}>click for likes!</button>
    </section>

    //button function same as onClick={() => setCounter(counter + 1)}
  )
}

export default Counter;