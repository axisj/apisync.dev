import { useI18n } from "@/i18n";
import { FrameDefault } from "@/pageFrame";
import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { mediaMax, mediaMin, SMixinFlexColumn } from "@/styles";

interface Props {}

export default function MediaQuery({}: Props) {
  const { t } = useI18n();
  const [width, setWidth] = useState(0);

  const handleGetWindowSize = useCallback(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleGetWindowSize);

    return () => {
      window.removeEventListener("resize", handleGetWindowSize);
    };
  }, [handleGetWindowSize]);

  return (
    <FrameDefault>
      <Div>
        <h1>
          {t("페이지 너비")}: {width}
        </h1>
        <h2>mediaMax Test</h2>
        <div className='mediaMax xs'>XS</div>
        <div className='mediaMax sm'>SM</div>
        <div className='mediaMax md'>MD</div>
        <div className='mediaMax lg'>LG</div>
        <div className='mediaMax xl'>XL</div>
        <div className='mediaMax ul'>UL</div>
        <h2>mediaMin Test</h2>
        <div className='mediaMin xs'>XS</div>
        <div className='mediaMin sm'>SM</div>
        <div className='mediaMin md'>MD</div>
        <div className='mediaMin lg'>LG</div>
        <div className='mediaMin xl'>XL</div>
        <div className='mediaMin ul'>UL</div>
      </Div>
    </FrameDefault>
  );
}

const Div = styled.div`
  padding: 20px;
  .mediaMax {
    ${SMixinFlexColumn("center", "center")};
    display: inline-flex;
    border: 2px solid #444;
    border-radius: 5px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    margin: 5px;
    transition: all 0.3s ease-in-out;

    &.xs {
      ${mediaMax.xs} {
        background-color: deeppink;
      }
    }

    &.sm {
      ${mediaMax.sm} {
        background-color: deeppink;
      }
    }
    &.md {
      ${mediaMax.md} {
        background-color: deeppink;
      }
    }
    &.lg {
      ${mediaMax.lg} {
        background-color: deeppink;
      }
    }
    &.xl {
      ${mediaMax.xl} {
        background-color: deeppink;
      }
    }
    &.ul {
      ${mediaMax.ul} {
        background-color: deeppink;
      }
    }
  }

  .mediaMin {
    ${SMixinFlexColumn("center", "center")};
    display: inline-flex;
    border: 2px solid #444;
    width: 50px;
    height: 50px;
    margin: 5px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    font-weight: bold;

    &.xs {
      ${mediaMin.xs} {
        background-color: deeppink;
      }
    }
    &.sm {
      ${mediaMin.sm} {
        background-color: deeppink;
      }
    }
    &.md {
      ${mediaMin.md} {
        background-color: deeppink;
      }
    }
    &.lg {
      ${mediaMin.lg} {
        background-color: deeppink;
      }
    }
    &.xl {
      ${mediaMin.xl} {
        background-color: deeppink;
      }
    }
    &.ul {
      ${mediaMin.ul} {
        background-color: deeppink;
      }
    }
  }
`;
