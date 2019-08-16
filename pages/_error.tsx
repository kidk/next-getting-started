import * as React from 'react';
import Error, { ErrorProps } from 'next/error';
import { NextPageContext } from 'next';

class MyError extends React.Component<ErrorProps> {
  static async getInitialProps(ctx: NextPageContext) {
    return {
      namespacesRequired: ['common'],
      statusCode: ctx.res ? (ctx.res.statusCode > 200 ? ctx.res.statusCode : false) : false
    };
  }

  render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}

export default MyError;
