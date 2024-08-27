import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemedImage from '@theme/ThemedImage';
import { useRef } from "react";



import { Button, Divider, ConfigProvider, Flex, Radio, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";

type BannerItem = {
  title: string;
  light: string;
  dark:string;
};

const BannerList: BannerItem[] = [
  {
    title: '삼성',
    light: "/img/partner_1.png",
    dark: "/img/partner_1_dark.png",
  },
  {
    title: '에어프리미아',
    light: "/img/partner_2.png",
    dark: "/img/partner_2_dark.png",
  },
  {
    title: '서울주택공사',
    light: "/img/partner_3.png",
    dark: "/img/partner_3_dark.png",
  },
  {
    title: '위포',
    light: "/img/partner_4.png",
    dark: "/img/partner_4_dark.png",
  },
  {
    title: '푸르니보육지원재단',
    light: "/img/partner_5.png",
    dark: "/img/partner_5_dark.png",
  },
];

export default function BannerSlider(): JSX.Element {

  const { colorMode } = useColorMode();

  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };


  return (
    <section className={styles.banners}>
      <div className="container">
        <h2 className="margin-bottom--lg text--center">Partners</h2>
        <h3>
          하루하루 많은 한국 개발자들 덕분에<br />
          APISync의 사용량이 점점 늘고 있습니다.
        </h3>
        <p>
          API를 손쉽게 관리하고 협업하며, APISync로 효율적인 개발 프로세스를 경험하고 있습니다.
        </p>
        <div className={styles.sliderContainer}>
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
            {BannerList.map((props, idx) => (
              <div key={idx}>
                  <ThemedImage
                  alt={props.title}
                  sources={{
                    light: useBaseUrl(props.light),
                    dark: useBaseUrl(props.dark),
                  }}
                  />
              </div>
            ))}
            </Slider>
          </div>
        <div className={styles.buttonContainer}>
          <ConfigProvider
            theme={{
              algorithm: colorMode === "dark" ? [theme.darkAlgorithm] : [],
              token: {
                // Seed Token
                colorPrimary: '#F84552',
                borderRadius: 4
              },
            }}
          >
            <Button type="primary" size={'large'}>
              지금 구매하세요
            </Button>
            <Button type="default" size={'large'}>
              영업팀 문의하기
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
}
