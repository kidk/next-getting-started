import * as React from 'react';
import { API_URL } from '../src/api';
import { startSegment } from 'newrelic';

class IndexPage extends React.Component {
    render() {
        startSegment('render/IndexPage', true, () => {
            return;
        });

        return <span>hello {API_URL}</span>
    }
}

export default IndexPage;
