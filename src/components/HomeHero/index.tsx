import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import { Button, ConfigProvider, Input, Space, theme } from "antd";
import {useColorMode} from '@docusaurus/theme-common';
import { useCallback, useEffect, useState } from "react";
import ThemedImage from "@theme/ThemedImage";


export default function HomeHero(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <header className={styles.heroContainer}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--5") + " " + styles.aligner}>

            <div className={styles.heroTextBox}>
              <h2>
                Build, Test, Release...<br />
                and anything else
              </h2>
              <p>
                API를 손쉽게 관리하고 협업하세요. APISync로 효율적인 개발 프로세스를 경험해 보세요.
                지금 가입하거나 데스크톱 앱을 다운로드하여 바로 시작할 수 있습니다.
              </p>
              <ConfigProvider
                theme={{
                  algorithm: colorMode === "dark" ? [theme.darkAlgorithm] : [],
                  token: {
                    // Seed Token
                    colorPrimary: '#F84552',
                    borderRadius: 4,
                    colorTextPlaceholder: '#CCCCCC',
                    colorBorder: '#F84552',
                  },
                }}
              >
                <Space.Compact style={{ width: '20rem' }}>
                  <Input defaultValue="" placeholder="name@company.com" size={'large'} />
                  <Button type="primary" size={'large'}>무료회원가입</Button>
                </Space.Compact>
              </ConfigProvider>
            </div>

            <div className={styles.dnBox}>
              <p>앱 다운로드를 위한 당신의 플랫폼을 고르세요.</p>
              <ul>
                <li><a href={""}>
                  <ThemedImage
                    alt={"Windows"}
                    sources={{
                      light: useBaseUrl("/img/os_win.svg"),
                      dark: useBaseUrl("/img/os_win_dark.svg"),
                    }}
                  />
                </a></li>
                <li><a href={""}>
                  <ThemedImage
                    alt={"Windows"}
                    sources={{
                      light: useBaseUrl("/img/os_mac.svg"),
                      dark: useBaseUrl("/img/os_mac_dark.svg"),
                    }}
                  />
                </a></li>
                <li><a href={""}>
                  <ThemedImage
                    alt={"Windows"}
                    sources={{
                      light: useBaseUrl("/img/os_linux.svg"),
                      dark: useBaseUrl("/img/os_linux_dark.svg"),
                    }}
                  />
                </a></li>
              </ul>
            </div>

          </div>
          <div className={clsx("col col--7") + " " + styles.aligner}>
            <ThemedImage
              alt={"Windows"}
              sources={{
                light: useBaseUrl("/img/hero.png"),
                dark: useBaseUrl("/img/hero_dark.png"),
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
