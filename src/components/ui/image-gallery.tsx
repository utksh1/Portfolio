"use client";

import React from "react";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const imageColumns = [
  [
    {
      alt: "Mountain valley under a cloudy sky",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&q=80",
      ratio: 3 / 4,
    },
    {
      alt: "Modern workspace with laptop and notebook",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
      ratio: 16 / 9,
    },
    {
      alt: "City skyline at dusk",
      src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1080&q=80",
      ratio: 3 / 4,
    },
    {
      alt: "Forest trail with warm sunlight",
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
      ratio: 16 / 9,
    },
  ],
  [
    {
      alt: "Laptop showing code on a desk",
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
      ratio: 16 / 9,
    },
    {
      alt: "Ocean waves from above",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
      ratio: 3 / 4,
    },
    {
      alt: "Night road through a city",
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
      ratio: 16 / 9,
    },
    {
      alt: "Person walking through architecture",
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1080&q=80",
      ratio: 3 / 4,
    },
  ],
  [
    {
      alt: "Snow covered mountain peak",
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1080&q=80",
      ratio: 3 / 4,
    },
    {
      alt: "Abstract light trails at night",
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
      ratio: 16 / 9,
    },
    {
      alt: "Minimal desk with keyboard",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      ratio: 16 / 9,
    },
    {
      alt: "Green hills and winding path",
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=80",
      ratio: 3 / 4,
    },
  ],
];

export function ImageGallery() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-10">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {imageColumns.map((column, col) => (
          <div key={col} className="grid gap-6">
            {column.map((image, index) => (
              <AnimatedImage
                key={`${col}-${index}`}
                alt={image.alt}
                src={image.src}
                ratio={image.ratio}
                placeholder={`https://placehold.co/1200x900/141414/f7f7f7?text=Image`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="relative size-full overflow-hidden rounded-lg border border-white/10 bg-accent"
    >
      <img
        alt={alt}
        src={imgSrc}
        className={cn(
          "size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out",
          {
            "opacity-100": isInView && !isLoading,
          },
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />
    </AspectRatio>
  );
}
