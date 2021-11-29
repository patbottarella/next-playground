import React, { Suspense } from "react";
// import Content from "../components/content.client";

const TestComponent = () => {
  return <div>This is a test</div>;
};

export default function Test() {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <TestComponent />
      </Suspense>
    </div>
  );
}
