import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from 'src/components/HomeFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Avatar, Flex, ConfigProvider, Segmented, Button, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";
import PriceTable from "@site/src/components/PriceTable";
import ThemedImage from "@theme/ThemedImage";
import PlanTable from "@site/src/components/PlanTable";

export default function App(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container">
          <div className={styles.priceHeader}>
          <ThemedImage
            style={{width:300, height:200}}
            alt={"circle_apisync"}
            sources={{
              light: useBaseUrl("/img/feature_5.png"),
              dark: useBaseUrl("/img/feature_5_dark.png"),
            }}
          />
          <h2>APISync API 플랫폼 플랜 및 가격</h2>
          <p>
            월 단위 또는 연 단위로 결제하고, 언제든지 취소할 수 있습니다.
          </p>
          </div>
        </div>
        <PriceTable />

        <PlanTable />
      </main>
    </Layout>
  );
}
