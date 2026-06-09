import React from "react";
import Image from "next/image";

export default function AvatarCluster({ className = "" }: { className?: string }) {
  const avatars = [
    "https://i.postimg.cc/K8PXd2zK/image.png",
    "https://github.com/harsh98trivedi.png",
    "https://github.com/chiragvishnoi-01.png",
  ];
  return (
    <div className={`mt-6 flex items-center justify-center gap-3 ${className}`}>
      <div className="flex -space-x-2">
        {avatars.map((src, idx) => (
          <div key={idx} className="relative h-9 w-9">
            <Image
              src={src}
              alt={`Founder avatar ${idx + 1}`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full ring-1 ring-white/20 border border-white/10 object-cover"
              priority
            />
          </div>
        ))}
      </div>
      <div className="ml-2 flex items-center gap-2 text-sm text-zinc-300">
        <span className="font-medium">Loved by Developers</span>
        <span aria-label="five stars" className="text-emerald-300">★★★★★</span>
      </div>
    </div>
  );
}