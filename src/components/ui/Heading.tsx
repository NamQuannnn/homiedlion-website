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
      <div className={center ? "text-center" : ""}>
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            {eyebrow}
          </p>
        )}
  
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          {title}
        </h2>
  
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>
        )}
      </div>
    );
  }