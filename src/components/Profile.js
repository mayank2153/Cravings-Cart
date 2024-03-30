import React from 'react'
// we will make this component as a class based component
// we use extends to specify that this is not a class but a class based component, and render is used inside it
class Profile extends React.Component{
    // The constructor() method is a special method for creating and initializing an object created within a class. It is called when an object is created from a class. The method takes parameters for initializing the object's state. It is important to note that the constructor() method is called before the render() method.
    // Inside the constructor() method, you can initialize the state of the component and bind event handlers. The state is an object that stores data about the   component. 
    constructor(props){
        super(props);
        this.state={
            Count:0
        }
    }
    render(){
        return(
            <div>

                <h2 className='text-bold'>Profile Class Component</h2>
                <h3>{this.props.name}</h3>
                {/* we use props by using this */}
                <p>Count:{this.state.Count}</p>
                {/* we dont set the state directly we should always use setState so that the UI will always sync with state variables */}
                <button onClick={(()=>{
                    this.setState({
                        Count:this.state.Count+1
                    })
                })}  >SetState</button>
                <p>Count:{this.state.Count}</p>
            </div>
        )
    }
}

export default Profile