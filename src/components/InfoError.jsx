import React from "react";

function InfoError({showMsg,styleChange}) {
  return (
    <p className={`text-lg first-letter:uppercase tracking-wider text-center font-semibold py-3 px-2.5 rounded-lg mb-4 ${styleChange}`}>
      {showMsg}
    </p>
  );
}

export default InfoError;
