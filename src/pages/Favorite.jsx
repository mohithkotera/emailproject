import React, { useState } from 'react'

const Favorite = () => {
    const [num, setNum] = useState(JSON.parse(localStorage.getItem("myArray")));
    console.log("num",num);
  return (
    <div>Favorite</div>
  )
}

export default Favorite