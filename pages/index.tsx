import * as React from "react";
import { API_URL } from "../src/api";
import { withTranslation } from "../config/nextI18n";
import { WithTranslation } from "react-i18next";

interface Props extends WithTranslation{

}


class IndexPage extends React.Component<Props> {
  static getInitialProps() {
    return {
      namespacesRequired: ["common"]
    };
  }

  render() {
    const { t } = this.props;
    return <span>{t('greeting')} {API_URL}</span>;
  }
}

export default withTranslation("common")(IndexPage);
