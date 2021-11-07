import React from 'react';

export default class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode};
    }

    render() {
        const {statusCode}: any = this.props;
        return (
            <div>
                Error!
                {statusCode}
            </div>
        )
    }
}
