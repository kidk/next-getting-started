import * as React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class IndexPage extends React.Component {
    render() {
        return <span>hello {publicRuntimeConfig.hello}</span>
    }
}

export default IndexPage;