import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Canvas, extend } from "@react-three/fiber";
import styles from './index.module.css';
import Layout from "@theme/Layout";
import AXBLogo from "@theme/ThemedImage";
import clsx from "clsx";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerSlider from "@site/src/components/BannerSlider";
import HomeHero from "@site/src/components/HomeHero";
import HomeFeatures from "@site/src/components/HomeFeatures";

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  // const { debug } = useControls({ debug: false })

  return (
    <Layout title={`Home`} description='Description will go into a meta tag in <head />'>

      <HomeHero />
      <main>
        <div className="container">
            <div className={styles.defBox}>
              <h2>What is APISync?</h2>
              <p>APISync은 API를 빌드하고 사용하기 위한 API 플랫폼입니다.<br />
                APISync은 API 라이프사이클의 각 단계를 간소화하고 협업을 간소화하여 더 나은 API를 더 빠르게 만들 수 있습니다.</p>
            </div>
        </div>

        <HomeFeatures />

        <BannerSlider />

      </main>
    </Layout>
);
}
