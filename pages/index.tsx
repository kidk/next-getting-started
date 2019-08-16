import * as React from 'react';
import { API_URL } from '../src/api';

class IndexPage extends React.Component {
    static getInitialProps() {
        return {
            namespacesRequired: ['common']
        }
    }

    render() {
        return <span>hello {API_URL}</span>
    }
}

export default IndexPage;