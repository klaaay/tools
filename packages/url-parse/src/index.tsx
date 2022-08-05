import { useState } from "react";
import ReactJson from "react-json-view";
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
      setIsLegal(true);
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
        {isLegal ? (
          <ReactJson displayDataTypes={false} name={false} src={urlInfo} />
        ) : (
          <pre>Invalid URL</pre>
        )}
      </StyledLayout>
    </Wrapper>
  );
}
