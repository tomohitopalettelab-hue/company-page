"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function TransitionProvider({ children }: Props) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);
  const failSafeTimerRef = useRef<number | null>(null);
  const loaderDuration = 1100;

  const startLoader = () => {
    setShowLoader(true);

    if (failSafeTimerRef.current) {
      window.clearTimeout(failSafeTimerRef.current);
    }

    failSafeTimerRef.current = window.setTimeout(() => {
      setShowLoader(false);
    }, loaderDuration);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (anchor.getAttribute("target") === "_blank") return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const currentPath = window.location.pathname;

      if (url.pathname === currentPath && url.search === window.location.search) return;

      startLoader();
    };

    const handlePopState = () => {
      startLoader();
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [loaderDuration]);

  useEffect(() => {
    return () => {
      if (failSafeTimerRef.current) {
        window.clearTimeout(failSafeTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="route-loader" aria-live="polite" aria-label="Loading">
          <div className="route-loader-dots" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      <div className="page-fade" key={pathname}>
        {children}
      </div>
    </>
  );
}
