// unControlled Components
// import React, { useState,useRef } from 'react'


// const Name = () => {
//     let [name,setName] = useState({ value: "Yudi",clicked: false})
//     const inputRef = useRef(null)
    
//    function handleClick()
//    {
//     setName({...name, clicked: true})
//    }
//    function handleSubmit(event)
//    {
//     event.preventDefault()

//     const inputValue = inputRef.current.value
//     setName({value: inputValue , clicked: false})

//    }
    

//     return (<div>
//        <p>{name.value}</p>
//        <button onClick={handleClick}>Change</button>
//        {name.clicked ? 
       
//        <form id='5' onSubmit={handleSubmit}> 
//      <input ref={inputRef} type="text" /> 
   
//        <button type='submit' >Save</button></form>
//         : null}

//     </div>)
    

    
    
// }

// export default Name
//  Controlled Components
// import React, { useState } from 'react'


// const Name = () => {
//     let [name,setName] = useState({ value: "Yudi",clicked: false})
    
    
//     function handleClick()
//     {
//      setName({...name, clicked: true})
//     }
   
    

//     return (<div>
//        <p>{name.value}</p>
//        <button onClick={handleClick}>Change</button>
//        {name.clicked ? 
       
//        <form id='5' > 
//      <input  type="text" placeholder='Change name' value={name.value} onChange={(e) => setName({value: e.target.value,clicked:true})} /> 
//         <button onClick={() => setName({...name, clicked: false})}>Save</button>
//       </form>
//         : null}

//     </div>)
    

    
    
// }

// export default Name
