import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { Button, ConfigProvider, Segmented, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";

type PriceItem = {
  title: string;
  price: JSX.Element;
  button: string;
  button_type: string;
  link:string;
  description: string;
  included_label: string;
  included:JSX.Element;
  additional:JSX.Element;
};

const PriceList: PriceItem[] = [
  {
    title:"FREE",
    price:(
      <>
        0원
      </>
    ),
    button: "지금 시작하기",
    button_type: "default",
    link:"",
    description:"개인이나 3명 이하의 소규모 팀이 API 테스트를 시작할 수 있습니다.",
    included_label:"포함 사항 :",
    included:(
      <>
      <ul>
      <li>최대 3명의 협력자</li>
        <li>API 클라이언트에 접근</li>
        <li>3개의 패키지</li>
        <li>30일 수집 회수</li>
        <li>25개 컬렉션 실행</li>
        <li>흐름에 대한 액세스</li>
        <li>Postbot에서 무료 활동 50가지</li>
      </ul>
      </>
    ),
    additional:(
      <>
      <ul>
        <li>포스트봇</li>
      </ul>
      </>
    )
  },
  {
    title:"PRO",
    price:(
      <>
        <span>사용자당 월</span>19,900원<span>월별 청구</span>
      </>
    ),
    button: "지금 구매하기",
    button_type: "primary",
    link:"",
    description:"단일 팀을 위한 기본 API 협업.",
    included_label:"모두 무료이며, 그 외에 다음이 포함됩니다:",
    included:(
      <>
        <ul>
          <li>무제한 협력자</li>
          <li>클라우드 기반 통합</li>
          <li>10,000개의 모의 서버 요청</li>
          <li>10,000 모니터 요청</li>
          <li>추가 결제 기능</li>
        </ul>
      </>
    ),
    additional:(
      <>
        <ul>
          <li>포스트봇</li>
          <li>컬렉션 러너</li>
          <li>흐름</li>
        </ul>
      </>
    )
  },
  {
    title:"BUSINESS+",
    price:(
      <>
        <span>사용자당 월</span>49,900원<span>월별 청구</span>
      </>
    ),
    button: "지금 구매하기",
    button_type: "primary",
    link:"",
    description:"대규모 팀, 조직 간 및 외부 파트너를 위한 API 협업.",
    included_label:"PRO의 모든 기능과 더불어:",
    included:(
      <>
        <ul>
          <li>개인 작업 공간</li>
          <li>단일 및 다중 파트너 작업 공간</li>
          <li>기본 역할 기반 액세스 제어</li>
          <li>25개 패키지</li>
          <li>90일 수집 회수</li>
        </ul>
      </>
    ),
    additional:(
      <>
        <ul>
          <li>포스트봇</li>
          <li>컬렉션 러너</li>
          <li>파트너 편집자</li>
          <li>흐름</li>
        </ul>
      </>
    )
  },
  {
    title:"ENTERPRISE GRID",
    price:(
      <>
        <span>연 플랜만 가능</span>
      </>
    ),
    button: "",
    button_type: "",
    link:"",
    description:"고급 지원, 보안 및 제어 기능을 갖춘 조직 전체 API 개발.",
    included_label:"BUSINESS+의 모든 기능과 더불어:",
    included:(
      <>
        <ul>
          <li>개인 API 네트워크</li>
          <li>SSO, SCIM 및 SAML</li>
          <li>보고 및 분석</li>
          <li>감사 로그</li>
          <li>사용자 그룹</li>
          <li>고급 역할 기반 액세스 제어</li>
          <li>100개 패키지</li>
          <li>100,000개의 모의 서버 요청</li>
          <li>10,000 모니터 요청</li>
          <li>고객 성공</li>
        </ul>
      </>
    ),
    additional:(
      <>
        <ul>
          <li>포스트봇</li>
          <li>컬렉션 러너</li>
          <li>파트너 편집자</li>
          <li>API 빌더</li>
          <li>흐름</li>
        </ul>
      </>
    )
  },
];


function Price({title, price, button, button_type, link, description, included_label, included, additional}: PriceItem) {

  const { colorMode } = useColorMode();

  return (
    <div className={clsx("col col--3")}>
      <div className={styles.priceBox}>
        <div className={styles.heading}>
        <h3><span>{title}</span></h3>
        <div className={styles.price}>{price}</div>
        {button ?
          <div className={styles.buttons}>
            <ConfigProvider
              theme={{
                algorithm: colorMode === "dark" ? [theme.darkAlgorithm] : [],
                token: {
                  // Seed Token
                  colorPrimary: "#F84552",
                  borderRadius: 4,
                },
              }}
            >
              <Button type={"default"} size={"large"}>
                {button}
              </Button>
            </ConfigProvider>
          </div>
          :
          ""
        }
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.includeList}>
          <h3 className={styles.listTitle}>{included_label}</h3>
          {included}
        </div>
        <div className={styles.includeList}>
          <h3 className={styles.listTitle}>사용가능한 추가 기능:</h3>
          {additional}
        </div>
      </div>

    </div>
  );
}


export default function PriceTable(): JSX.Element {

  const { colorMode } = useColorMode();

  return (
    <>
      <div className="container">
        <div className={styles.segmentWrap}>
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
        <Segmented
          className={styles.segment}
          options={[
            {
              label: (
                <div className={styles.segmentItem}>
                  <div>월간 구독</div>
                </div>
              ),
              value: 'monthly',
            },
            {
              label: (
                <div className={styles.segmentItem}>
                  <div>연간</div>
                  <div className={styles.segmentItemDesc}>최대 25% 절약</div>
                </div>
              ),
              value: 'annual',
            },
          ]}
        />
      </ConfigProvider>
    </div>
    <div className="row">
      {PriceList.map((props, idx) => (
        <Price key={idx} {...props} />
      ))}
    </div>
  </div>
  </>
);
}
