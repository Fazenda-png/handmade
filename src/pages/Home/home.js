import React from 'react'
import Menu from '../../components/Menu'



function Home(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <Menu></Menu>
        </div>
    );
}

export default Home;