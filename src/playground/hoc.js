// Higer Order COmponent (HOC) - A components (HOC) that render another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WarppedComponent) => {
    return (props) => (
      <div>
        {props.isAdmin && <p>This is private info. Please don´t share!</p>}
        <WarppedComponent {...props} />
      </div>
    );
}

const requireAuthentication = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WarppedComponent {...props}/> : <p>Please Log in...</p>}
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'))