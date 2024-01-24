import { Nav } from "@/components/Nav";
import { PageWrap } from "@/components/Styled";
import { useUserStore } from "@/store/useUserStore";
import styled from "@emotion/styled";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type FrameAuthType = "auth" | "noAuth";
interface Props {
  auth?: FrameAuthType;
  children: React.ReactNode;
}

export function FrameDefault({ auth, children }: Props) {
  const router = useRouter();
  const isLogin = useUserStore((s) => s.isLogin);
  const _hasHydrated = useUserStore((s) => s._hasHydrated);

  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (auth && _hasHydrated) {
      if (auth === "auth" && !isLogin) {
        router.push(`/login?fallBack=${location.pathname + location.search}`);
      }
      if (auth === "noAuth" && isLogin) {
        router.back();
      }
    }
  }, [auth, isLogin, router]);

  if (auth) {
    if (auth === "auth" && !isLogin) {
      return null;
    }
    if (auth === "noAuth" && isLogin) {
      return null;
    }
  }

  return (
    <Main>
      <Nav />
      <Wrap>{children}</Wrap>
    </Main>
  );
}

const Main = styled.main``;
const Wrap = styled(PageWrap)``;
