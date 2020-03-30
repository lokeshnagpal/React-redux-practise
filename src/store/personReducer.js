const initialState={
 persons:[]
}

const personReducer = (state=initialState,action) => {
 switch(action.type){
   case 'ADD_PERSON':{
     const newPerson={
         id:Math.random(),
         name:action.personData.name,
         age:action.personData.age
     }
     return{
         ...state,
         persons:state.persons.concat(newPerson)
     }
   }

   case 'DELETE_PERSON':{    
    return{
        ...state,
        persons:state.persons.filter(person => person.id !== action.id)
    }
  }

   default:
     return state
 }
}

export default personReducer;