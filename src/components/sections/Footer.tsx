import { forwardRef } from "react";
import { useAppConfig } from "@/config/hooks";
import { Card } from "../ui/card";
import { cn } from "@/utils";
import { useIsMobile } from "@/hooks/useMobile";

const Footer = forwardRef<
  HTMLElement,
  {
    isSettingsOpen: boolean;
  }
>(({ isSettingsOpen }, ref) => {
  const { selectedFooterStyle, publicSettings } = useAppConfig();
  const isMobile = useIsMobile();
  const siteName = publicSettings?.sitename || "本站";
  return (
    <footer
      ref={ref}
      className={cn(
        selectedFooterStyle === "levitation"
          ? "fixed"
          : selectedFooterStyle === "followContent"
          ? "mb-4 w-(--main-width) max-w-screen-2xl mx-auto"
          : "",
        "bottom-0 left-0 right-0 flex z-10"
      )}
      style={{
        right: isSettingsOpen && !isMobile ? "var(--setting-width)" : "0",
      }}>
      <Card
        className={cn(
          selectedFooterStyle !== "followContent" ? "rounded-none" : "",
          "p-2 w-full flex items-center justify-center inset-shadow-sm inset-shadow-(color:--accent-a4)"
        )}>
        <p className="flex justify-center text-sm text-secondary-foreground theme-text-shadow">
          © {siteName}
        </p>
      </Card>
    </footer>
  );
});

export default Footer;
