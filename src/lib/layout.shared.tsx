import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import logo from "../assets/square-app-logo-light.png"
import Image from 'next/image'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src={logo} alt={"logo"}  width={25}/>
          Vibe - One Wheel E-Bike
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
    githubUrl: "https://github.com/RideTheVibe"
  };
}
