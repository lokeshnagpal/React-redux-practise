import React,{Component} from "react";

class AddPerson extends Component{   
    state={
        name:'',
        age:''
    }
    
    nameChangeHandler = (event) =>{
        this.setState({name:event.target.value})
      }
    
    ageChangeHandler = (event) =>{
        this.setState({age:event.target.value})
    }  
    

    render(){
        return(
           <div className="AddPerson">
                 <input
                  type="text"
                  placeholder='name'
                  onChange={this.nameChangeHandler}></input>
                 <input
                  type="numer"
                   placeholder='age'
                   onChange={this.ageChangeHandler}></input>
                 <button onClick={() => this.props.personAdded(this.state.name,this.state.age)}>AddPerson</button>
           </div>   
         
        )
    }
}

export default AddPerson