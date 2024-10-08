import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeFeatures from 'src/components/HomeFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function App(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Company`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/*<HomeFeatures/>*/}
      </main>
    </Layout>
  );
}
