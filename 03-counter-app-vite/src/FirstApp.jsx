import React from 'react'
import PropTypes from 'prop-types' //first install prop-types: yarn add prop-types

const newMessage = {
    message: 'Hello',
    title: 'Ok'
};

const getAge = (a,b) =>{
    return a-b;
}

const FirstApp = ( {title,subtitle} ) => {
    return (
        <>
        {/* <code>{ JSON.stringify( newMessage ) }</code> */}
        <h1>First App Here</h1>
        <h2>{title} {subtitle}</h2>
        <h3>My name is: Gisbel Torres</h3>
        <h4>{ getAge(2022,1993) }</h4>
        </>
    )
}

export default FirstApp

FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //title must be string and required
    subtitle: PropTypes.number //subtitle must be a number
}

FirstApp.defaultProps = {
    title: 'There is no title, add one',
}

// To return several elements is important group them in a parent node
// Like: <></>
// To print an object, we use JSON.stringify() because we can't print objects into {}, but arrays yes
// {title,subtitle} are props and we give them the value in the main.jsx (component FirstApp)