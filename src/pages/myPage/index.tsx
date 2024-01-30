import { FrameDefault } from "@/pageFrame";
import { apiWrapper } from "@/services/apiWrapper";
import { useUserStore } from "@/store/useUserStore";
import { errorHandling } from "@/utils/errorHandling";
import styled from "@emotion/styled";
import { Button, ConfigProvider, Divider, Space } from "antd";
import { useCallback } from "react";
import { alertDialog, confirmDialog } from "@/components/dialogs";
import { useI18n } from "@/i18n";

interface Props {}

export default function MyPage({}: Props) {
  const { t } = useI18n();
  const me = useUserStore((s) => s.me);

  return (
    <FrameDefault auth={"auth"}>
      <Div>
        <h1>My Page</h1>
        <Divider />
        id: {me?.id}
        name : {me?.name}
      </Div>
    </FrameDefault>
  );
}

const Div = styled.div`
  padding: 20px;
  color: var(--primary-color);
`;
