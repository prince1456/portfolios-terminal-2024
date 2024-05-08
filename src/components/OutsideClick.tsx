"use client";
import { useEffect, useRef, useCallback } from "react";
type PropsType = {
  onOutsideClick: () => void;
  children: React.ReactNode;
};

const OutSideClickWrapper = ({ onOutsideClick, children }: PropsType) => {
  const wrapperRef = useRef(null);
  const handleClickOutside = useCallback(
    (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    },
    [wrapperRef, onOutsideClick]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return <div ref={wrapperRef}>{children}</div>;
};

export default OutSideClickWrapper;
