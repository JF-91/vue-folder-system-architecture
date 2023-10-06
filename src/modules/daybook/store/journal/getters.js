
/* eslint-disable */
//para tener una forma rapida de leer el estate y traer la informacion como la necesito

// export const myGetter =  (state) =>{
//      return state
// }

export const getEntriesByTerm =  (state ) =>(term) =>{
     if(term.trim() === '') return []
     return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLowerCase())) 
} 


export const getEntriesById =  (state) = (id = '') =>{

     const entry =  state.entries.find( entry => entry.id === id)
     if(!entry ) return 
     return {...entry}

}