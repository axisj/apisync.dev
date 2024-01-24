import { FrameDefault } from "@/pageFrame";
import { apiWrapper } from "@/services/apiWrapper";
import { errorHandling } from "@/utils/errorHandling";
import styled from "@emotion/styled";
import { Button, ConfigProvider, Divider, Space } from "antd";
import { useCallback } from "react";
import { alertDialog, confirmDialog } from "@/components/dialogs";
import { useI18n } from "@/i18n";

interface Props {}

export default function DialogTest({}: Props) {
  const { t } = useI18n();
  const open = useCallback(async () => {
    try {
      await confirmDialog({
        content: t("성공처리 할까요?"),
      });

      await apiWrapper("post", "/api/test", {});

      await alertDialog({
        content: t("성공"),
      });
    } catch (err) {
      await errorHandling(err);
    }
  }, [t]);

  return (
    <FrameDefault>
      <Div>
        <h1>Dialog Test</h1>

        <Divider />

        <Space wrap>
          <Button onClick={open}>Confirm</Button>
          <Button type={"primary"}>primary</Button>
          <Button ghost>ghost</Button>
          <Button type={"primary"} ghost>
            ghost primary
          </Button>
          <Button type={"link"}>Link</Button>
          <Button type={"text"}>Text</Button>
          <Button type={"default"}>Default</Button>
          <Button type={"dashed"}>Dashed</Button>
          <Button type={"primary"} danger>
            primary danger
          </Button>
          <Button type={"default"} danger>
            default danger
          </Button>
        </Space>

        <Divider />

        <ConfigProvider
          theme={{
            token: {
              controlHeightSM: 30,
            },
          }}
        >
          <Space wrap>
            <Button size={"small"} onClick={open}>
              Confirm
            </Button>
            <Button size={"small"} type={"primary"}>
              primary
            </Button>
            <Button size={"small"} ghost>
              ghost
            </Button>
            <Button size={"small"} type={"primary"} ghost>
              ghost
            </Button>
            <Button size={"small"} type={"link"}>
              Link
            </Button>
            <Button size={"small"} type={"text"}>
              Text
            </Button>
            <Button size={"small"} type={"default"}>
              Default
            </Button>
            <Button size={"small"} type={"dashed"}>
              Dashed
            </Button>
            <Button size={"small"} type={"primary"} danger>
              danger
            </Button>
            <Button size={"small"} type={"default"} danger>
              danger
            </Button>
          </Space>
        </ConfigProvider>
      </Div>
    </FrameDefault>
  );
}

const Div = styled.div`
  padding: 20px;
  color: var(--primary-color);
`;
