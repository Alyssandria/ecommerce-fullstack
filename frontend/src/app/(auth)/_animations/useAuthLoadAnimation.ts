import { usePathname } from "next/navigation"
import { RefObject, useEffect, useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"

export const useAuthLoadAnimation = (ref: RefObject<HTMLDivElement | null>) => {
  const pathname = usePathname();
  gsap.registerPlugin(useGSAP);
  const timeline = useRef<gsap.core.Timeline | null>(null)

  useGSAP(() => {
    if (!ref.current) return;
    if (timeline.current) timeline.current.kill();

    // DEFINE THE TIMELINE
    timeline.current = gsap.timeline();

    timeline.current.fromTo(ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: .8 })
  }, [pathname]);

}
