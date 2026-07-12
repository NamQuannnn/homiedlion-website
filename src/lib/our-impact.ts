import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type ImpactLocale = "vi" | "en";

export type ImpactMetadata = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  location: string;
  coverImage: string;
  images: string[];
};

export type ImpactStory = ImpactMetadata & {
  contentHtml: string;
};

const CONTENT_DIRECTORY = path.join(
  process.cwd(),
  "src/content/our-impact"
);

const PUBLIC_DIRECTORY = path.join(
  process.cwd(),
  "public/our-impact"
);

const SUPPORTED_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
];

function normalizeLocale(locale: string): ImpactLocale {
  return locale === "vi" ? "vi" : "en";
}

function validateMetadata(
  slug: string,
  data: Record<string, unknown>
): Omit<ImpactMetadata, "slug" | "images"> {
  const requiredFields = [
    "title",
    "summary",
    "publishedAt",
    "location",
    "coverImage",
  ] as const;

  for (const field of requiredFields) {
    if (
      typeof data[field] !== "string" ||
      data[field].trim() === ""
    ) {
      throw new Error(
        `Impact story "${slug}" is missing the "${field}" field.`
      );
    }
  }

  return {
    title: data.title as string,
    summary: data.summary as string,
    publishedAt: data.publishedAt as string,
    location: data.location as string,
    coverImage: data.coverImage as string,
  };
}

async function getStoryImages(slug: string): Promise<string[]> {
  const directory = path.join(PUBLIC_DIRECTORY, slug);

  try {
    const entries = await fs.readdir(directory, {
      withFileTypes: true,
    });

    return entries
      .filter((entry) => {
        if (!entry.isFile()) return false;

        const extension = path.extname(entry.name).toLowerCase();

        return (
          SUPPORTED_IMAGE_EXTENSIONS.includes(extension) &&
          !entry.name.toLowerCase().startsWith("cover.")
        );
      })
      .map((entry) => entry.name)
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      )
      .map((filename) => `/our-impact/${slug}/${filename}`);
  } catch (error) {
    const code =
      error instanceof Error && "code" in error
        ? String(error.code)
        : "";

    if (code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function getImpactSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(CONTENT_DIRECTORY, {
      withFileTypes: true,
    });

    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  } catch (error) {
    const code =
      error instanceof Error && "code" in error
        ? String(error.code)
        : "";

    if (code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function getImpactStory(
  slug: string,
  locale: string
): Promise<ImpactStory | null> {
  if (path.basename(slug) !== slug) {
    return null;
  }

  const language = normalizeLocale(locale);
  const filePath = path.join(
    CONTENT_DIRECTORY,
    slug,
    `${language}.md`
  );

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(content);

    const metadata = validateMetadata(slug, data);
    const images = await getStoryImages(slug);

    return {
      slug,
      ...metadata,
      images,
      contentHtml: processedContent.toString(),
    };
  } catch (error) {
    const code =
      error instanceof Error && "code" in error
        ? String(error.code)
        : "";

    if (code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export async function getAllImpactStories(
  locale: string
): Promise<ImpactMetadata[]> {
  const slugs = await getImpactSlugs();

  const stories = await Promise.all(
    slugs.map((slug) => getImpactStory(slug, locale))
  );

  return stories
    .filter((story): story is ImpactStory => story !== null)
    .map((story) => ({
      slug: story.slug,
      title: story.title,
      summary: story.summary,
      publishedAt: story.publishedAt,
      location: story.location,
      coverImage: story.coverImage,
      images: story.images,
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );
}