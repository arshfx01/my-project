"use client";

import { useEffect, useState } from "react";
import DrawerContent from "@/components/Sub/DrawerContent";
import { ChevronsRight } from "lucide-react";
import { Drawer } from "vaul";

export default function VaulDrawer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const direction = isMobile ? "bottom" : "right";

  return (
    <Drawer.Root direction={direction}>
      <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
        Open Drawer
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={`fixed z-50 outline-none ${
            isMobile
              ? "bottom-0 left-0 right-0 h-[70vh]"
              : "right-2 top-2 bottom-2 w-[430px]"
          } flex`}
          style={
            {
              "--initial-transform": isMobile
                ? "translateY(100%)"
                : "calc(100% + 8px)",
            } as React.CSSProperties
          }
        >
          {!isMobile && (
            <div className="z-50 my-4 w-14 bg-transparent hover:bg-neutral-900/20 rounded-l-[16px] flex items-center justify-center">
              <Drawer.Close className="flex h-full w-full justify-center text-sm font-medium hover:text-white p-2 text-white/30">
                <ChevronsRight />
              </Drawer.Close>
            </div>
          )}
          <div className="bg-neutral-900/50 text-white h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <Drawer.Title></Drawer.Title>
            <Drawer.Description></Drawer.Description>
            <DrawerContent />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
