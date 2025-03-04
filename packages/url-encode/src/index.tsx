import { useState } from "react";
import { Wrapper, Textarea, StyledLayout } from "@wcj/tools-react-components";

export default function URLEncode() {
  const [url, setUrl] = useState<string>();
  const [encodedUrl, setEncodeUrl] = useState<string>();
  const [type, setType] = useState<"raw" | "encoded">("raw");
  const handleInput = (value: string = "") => {
    if (type === "raw") {
      setUrl(value);
      setEncodeUrl(encodeURIComponent(value));
    } else if (type === "encoded") {
      setUrl(decodeURIComponent(value));
      setEncodeUrl(value);
    }
  };
  return (
    <Wrapper>
      <StyledLayout title="URL">
        <Textarea
          spellCheck={false}
          value={url}
          onFocus={() => setType("raw")}
          onInput={(evn) =>
            handleInput((evn.target as HTMLTextAreaElement).value)
          }
        />
      </StyledLayout>
      <StyledLayout title="Encoded URL">
        <Textarea
          spellCheck={false}
          value={encodedUrl}
          onFocus={() => setType("encoded")}
          onInput={(evn) =>
            handleInput((evn.target as HTMLTextAreaElement).value)
          }
        />
      </StyledLayout>
    </Wrapper>
  );
}
