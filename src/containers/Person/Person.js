import React ,{Component} from 'react';
import AddPerson from './../../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import PersonOutput from './../../components/PersonOutput/PersonOutput'
class Person extends Component{
  
    render(){
      return(
       <div>
         <AddPerson personAdded={this.props.onAddedPerson}/> 
         {this.props.prs.map(person => (
            <PersonOutput 
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}/>
         ))}        
       </div>
      )
    }

}

const mapStateToProps = (state) =>{
   return {
     prs:state.persons
   }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onAddedPerson:(name,age) => dispatch({type:'ADD_PERSON',personData:{name:name,age:age}}),
    onDeletePerson:(key) => dispatch({type:'DELETE_PERSON',id:key})
  }  
}

export default connect(mapStateToProps,mapDispatchToProps)(Person);