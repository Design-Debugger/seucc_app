import Image from 'next/image';

export default function OptimizedImage({ src, alt, ...props }) {
  return (
    <div className="relative w-full h-[300px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={props.priority}
      />
    </div>
  );
} 