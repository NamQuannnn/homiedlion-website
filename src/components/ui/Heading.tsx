interface HeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    center?: boolean;
  }
  
  export default function Heading({
    eyebrow,
    title,
    description,
    center = true,
  }: HeadingProps) {
    return (
      <div className={center ? "text-center" : "text-left"}>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#7A5A2B]">
            {eyebrow}
          </p>
        )}
  
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
  
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>
        )}
      </div>
    );
  }