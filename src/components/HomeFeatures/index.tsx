import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

type FeatureItem = {
  title: string;
  light: string;
  dark: string;
  description: JSX.Element;
  feature:JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'API 도구',
    light: "/img/feature_1.png",
    dark: "/img/feature_1_dark.png",
    description: (
      <>
        APISync 플랫폼에는 API 설계, 테스트, 문서화, 모의 작업부터 API 공유 및 검색까지 API 수명 주기를 가속화하는 데 도움이 되는 포괄적인 도구 세트가 포함되어 있습니다.
      </>
    ),
    feature: (
      <>
        <ul>
          <li>API 클라이언트</li>
          <li>API 디자인</li>
          <li>API 문서</li>
          <li>API 테스트</li>
          <li>모의 서버</li>
          <li>모니터</li>
          <li>API 감지</li>
        </ul>
      </>
    ),
  },
  {
    title: 'API 저장소',
    light: "/img/feature_2.png",
    dark: "/img/feature_2_dark.png",
    description: (
      <>
        모든 API 아티팩트를 하나의 중앙 플랫폼에서 쉽게 저장, 카탈로그화하고 협업하세요. APISync는 API 사양, 문서, 워크플로 레시피, 테스트 사례 및 결과, 메트릭 및 API와 관련된 모든 것을 저장하고 관리할 수 있습니다.
      </>
    ),
    feature: (
      <>
        <ul>
          <li>API 빌더</li>
          <li>네이티브 Git 지원</li>
          <li>개인 API 네트워크</li>
          <li>공개 API 네트워크</li>
          <li>강력한 검색기능</li>
        </ul>
      </>
    ),
  },
  {
    title: '거버넌스',
    light: "/img/feature_3.png",
    dark: "/img/feature_3_dark.png",
    description: (
      <>
        APISync의 거버넌스에 대한 전체 라이프사이클 접근 방식은 도입자들이 개발 관행을 전환하여 더 나은 품질의 API를 제공하고 개발자 팀과 API 설계 팀 간의 협업을 촉진할 수 있도록 해줍니다.
      </>
    ),
    feature: (
      <>
        <ul>
          <li>API 거버넌스</li>
          <li>API 보안</li>
          <li>보안감사</li>
        </ul>
      </>
    ),
  },
  {
    title: '작업 공간',
    light: "/img/feature_4.png",
    dark: "/img/feature_4_dark.png",
    description: (
      <>
        APISync 워크스페이스는 API 작업을 구성하고 조직 전체 또는 전 세계에서 협업하는 데 도움이 됩니다. 다양한 요구 사항에 맞는 APISync 워크스페이스에는 개인, 팀, 파트너 및 공개 워크스페이스의 네 가지 종류가 있습니다.
      </>
    ),
    feature: (
      <>
        <ul>
          <li>실시간으로 협업</li>
          <li>템플릿을 사용</li>
          <li>API 개발 간소화</li>
          <li>사용자 액세스 관리</li>
        </ul>
      </>
    ),
  },
];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

function Feature({title, light, dark, description, feature}: FeatureItem) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center">
              <ThemedImage
                className={styles.featureImg}
                alt={title}
                sources={{
                  light: useBaseUrl(light),
                  dark: useBaseUrl(dark),
                }}
              />
            </div>
            <div className="text--center">
                <Heading as="h3" className={styles.featureTitle}><span>{title}</span></Heading>
                <p className={styles.featureDesc}>{description}</p>
            </div>
            <div className={styles.featureList}>
                <h3>Features</h3>
                {feature}
            </div>
        </div>
    );
}


export default function HomeFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
          <h2 className="margin-bottom--lg text--center">FEATURES</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
