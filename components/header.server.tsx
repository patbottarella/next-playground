import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <div className="Header">Header</div>
      <style jsx>{`
        .Header {
          background: #696969;
          padding: 40px 0;
          width: 100%;
          position: fixed;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Header;
