import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FaDiscord } from "react-icons/fa";
import { X } from "lucide-react";

import Image from 'next/image';

/**
 * Shared layout configuration for all Emberly docs layouts.
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout:  app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/EmberlyOSS',
  nav: {
    title: (
      <span className="flex items-center gap-2 text-base font-bold">
        <Image
          src="/icon.svg"
          alt="Emberly"
          width={22}
          height={22}
          className="rounded-sm"
        />
        Emberly Docs
      </span>
    ),
    url: '/',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Main Website',
      url: 'https://embrly.ca',
    },
    {
      type: "icon",
      text: "Discord",
      icon: <FaDiscord className="size-6" />,
      url: "https://discord.gg/JdNTWcUyeN",
    },
    {
      type: "icon",
      text: "Twitter/X",
      icon: <X className="size-6" />,
      url: "https://twitter.com/TryEmberly",
    },
  ],
};

