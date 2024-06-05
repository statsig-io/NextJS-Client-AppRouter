"use client"; // important! the distinction between what is happening on the client and server will matter for ssr

import { StatsigProvider, useGate } from "statsig-react";

function Content() {
  const { value } = useGate("example_feature_flag");
  return (
    <div>
      nextjs_app_bg: {value ? "Passing" : "Failing"}
    </div>
  );
}

export default function ClientApp(): JSX.Element {
  return (
    <StatsigProvider
      sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY!}
      user={{ userID: '12345' }}
    >
      <Content />
    </StatsigProvider>
  );
}