import React, { Suspense } from "react";
// import Content from "../components/content.client";

const TestComponent = () => {
  return <div>This is a test</div>;
};

export default function Test() {
  return (
    <div>
      <h1>Welcome to React Server Components</h1>
      <Suspense fallback={"Loading..."}>
        <TestComponent />
      </Suspense>
    </div>
  );
}
