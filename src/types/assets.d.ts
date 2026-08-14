declare module '*.css';

declare module '*.glb' {
  const url: string
  export default url
}

declare module '*.mp3' {
  const url: string
  export default url
}

// `*.webp` is typed by Next.js (`next/image-types/global`) as StaticImageData;
// asset consumers read `.src` from it.
