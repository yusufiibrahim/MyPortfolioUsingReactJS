import React from "react";

// css
import "./footer.css";

const footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        © MUHAMMAD YUSUF IBRAHIM &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default footer;
