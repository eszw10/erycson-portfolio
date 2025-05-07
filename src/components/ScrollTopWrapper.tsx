import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}
