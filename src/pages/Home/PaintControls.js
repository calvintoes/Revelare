import React, { useState } from 'react';

const PaintControls = () => {

  const [add, setAddBtn] = useState(false)
  const [subtract, setSubtractBtn] = useState(false) 
  const [shuffle, setShuffleBtn] = useState(false) 
  const [size, sizeOfBrush] = useState(5)
  const [brushStroke, setbrushStroke] = useState('solid')
        

  return ( 
    <div>
      
    </div>
   );
}
 
export default PaintControls;