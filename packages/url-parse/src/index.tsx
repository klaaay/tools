import { useState } from "react";
import { Wrapper, Textarea, StyledLayout } from "@wcj/tools-react-components";

export default function URLEncode() {
  const [isLegal, setIsLegal] = useState(true);
  const [urlInfo, serUrlInfo] = useState<object>({});
  const handleInput = (value: string = "") => {
    try {
      const urlObj = new URL(value);
      const queryEntries = urlObj.searchParams.entries();
      let queryObj: Record<string, string> = {};
      if (queryEntries) {
        for (var pair of queryEntries) {
          queryObj[pair[0]] = pair[1];
        }
      }
      const {
        hash,
        host,
        hostname,
        href,
        origin,
        password,
        pathname,
        port,
        protocol,
        search,
        username,
      } = urlObj;
      serUrlInfo({
        searchParams: queryObj,
        search,
        hash,
        host,
        hostname,
        href,
        origin,
        password,
        pathname,
        port,
        protocol,
        username,
      });
    } catch (error) {
      serUrlInfo({});
      setIsLegal(false);
    }
  };
  return (
    <Wrapper>
      <StyledLayout title="URL">
        <Textarea
          spellCheck={false}
          onInput={(evn) =>
            handleInput((evn.target as HTMLTextAreaElement).value)
          }
        />
      </StyledLayout>
      <StyledLayout title="Encoded URL">
        <pre>{isLegal ? JSON.stringify(urlInfo, null, 2) : "Invalid URL"}</pre>
      </StyledLayout>
    </Wrapper>
  );
}
