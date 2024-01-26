import { PageWrap } from "@/components/Styled";
import { useUserStore } from "@/store/useUserStore";
import { SMixinFlexRow } from "@/styles";
import styled from "@emotion/styled";
import { Button, Segmented } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

interface Props {}

export function Nav({}: Props) {
  const router = useRouter();
  const path = usePathname();
  const isLogin = useUserStore((s) => s.isLogin);
  const logout = useUserStore((s) => s.logout);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Div>
      <Wrap>
        <Segmented
          options={[
            { label: "Home", value: "/" },
            { label: "dialogTest", value: "/dialogTest" },
            { label: "mediaQuery", value: "/mediaQuery" },
            { label: "myPage", value: "/myPage" },
          ]}
          value={path}
          onChange={(value) => {
            router.push(value as string);
          }}
        />

        <div>
          {isLogin ? (
            <Button onClick={handleLogout}>logout</Button>
          ) : (
            <Button onClick={() => router.push("/login")}>login</Button>
          )}
        </div>
      </Wrap>
    </Div>
  );
}

const Div = styled.nav`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;
const Wrap = styled(PageWrap)`
  ${SMixinFlexRow("space-between", "center")};
`;
