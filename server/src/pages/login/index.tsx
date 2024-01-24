import { useI18n } from "@/i18n";
import { FrameDefault } from "@/pageFrame";
import { useUserStore } from "@/store/useUserStore";
import { errorHandling } from "@/utils/errorHandling";
import styled from "@emotion/styled";
import { Button, Divider, Form, Input } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface Props {}

export default function Login({}: Props) {
  const { t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form] = Form.useForm();

  const setMe = useUserStore((s) => s.setMe);

  const handleLogin = useCallback(async () => {
    try {
      setMe({
        id: "test",
        name: "test",
      });
      const fallBack = searchParams.get("fallBack");
      router.push(fallBack ?? "/");
    } catch (err) {
      await errorHandling(err);
    }
  }, [router, setMe]);

  return (
    <FrameDefault auth={"noAuth"}>
      <Div>
        <h1>Login</h1>
        <Divider />
        <Form form={form} onFinish={handleLogin}>
          <Form.Item name='username' label='Username'>
            <Input />
          </Form.Item>
          <Form.Item name='password' label='Password'>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              {t("로그인")}
            </Button>
          </Form.Item>
        </Form>
      </Div>
    </FrameDefault>
  );
}

const Div = styled.div`
  padding: 20px;
  color: var(--primary-color);
`;
