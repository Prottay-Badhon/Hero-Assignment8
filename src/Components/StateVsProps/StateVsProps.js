import React from 'react';
import "./StateVsProps.css"
const StateVsProps = () => {
    return (
       <div className="">
        <h1 style={{textAlign: "center"}}>State Vs Props</h1>
         <div className='stateProps'>
            
            <div className='state'>
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
            </div>
            <div className='props'>
            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
            </div>
        </div>
       </div>
    );
};

export default StateVsProps;