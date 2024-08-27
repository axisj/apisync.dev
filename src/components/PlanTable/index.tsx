import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { Button, ConfigProvider, Segmented, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";

export default function PlanTable(): JSX.Element {

  const { colorMode } = useColorMode();

  return (
    <>
      <div className="container">
        <table>

          <thead>
          <tr>
            <th></th>
            <td>
              Free
              $0
            </td>
            <td>
              Pro
              사용자당 월
              19,900원
              월별 청구
            </td>
            <td>
              BUSINESS+
              사용자당 월
              49,900원
              월별 청구
            </td>
            <td>
              연 플랜만 가능
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th></th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
