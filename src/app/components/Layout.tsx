import { Outlet, useLocation } from "react-router";
import { BottomNavigation } from "./BottomNavigation";
import { AnimatePresence, motion } from "motion/react";

export function Layout() {
  const location = useLocation();

  return (
    <div className="relative w-full h-screen max-w-[390px] mx-auto overflow-hidden bg-background">
      {/* Safe area for Dynamic Island - 59px top */}
      <div className="h-full flex flex-col pt-[59px] pb-[34px]">
        {/* Main content area with bottom navigation spacing */}
        <div className="flex-1 overflow-y-auto pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Bottom Navigation - fixed at bottom */}
        <BottomNavigation />
      </div>
    </div>
  );
}