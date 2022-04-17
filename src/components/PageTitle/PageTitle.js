import  React  from 'react';

const PageTitle = (props) => {
    return(
        <React.Fragment>
            <h1 className="page-title">{props.title}</h1>
            <h2 className="page-description">{props.description}</h2>
        </React.Fragment>
    )
}

export {PageTitle};