// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
/* Import Syntax
import - We want to get some code from some other file or dependency
<variable> The variable we want to assign this import to
from - We are about to specify the name of the library or file we are importing from
'<location> ' the name of the dependency or path to the file we are importing */

// Create a react component
/* What a react component is
A function or a class that produces HTML to show the user (using JSX), and handles feedback from the user (using EventHandlers) */

const App = () => {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }} >
                {buttonText.text}
            </button>
        </div>
    )
};

// Take the react component and show it on the screen (slap it on the DOM)
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)