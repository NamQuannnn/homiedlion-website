import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import type {
  Report,
  ReportLocale,
  ReportMetadata,
} from "@/content/reports/types";

const REPORTS_DIRECTORY = path.join(
  process.cwd(),
  "src/content/reports"
);

function normalizeLocale(locale: string): ReportLocale {
  return locale === "vi" ? "vi" : "en";
}

function validateMetadata(
  slug: string,
  data: Record<string, unknown>
): ReportMetadata {
  const requiredFields = [
    "title",
    "period",
    "publishedAt",
    "summary",
    "downloadFile",
  ] as const;

  for (const field of requiredFields) {
    if (typeof data[field] !== "string" || !data[field]) {
      throw new Error(
        `Report "${slug}" is missing the "${field}" field.`
      );
    }
  }

  return {
    slug,
    title: data.title as string,
    period: data.period as string,
    publishedAt: data.publishedAt as string,
    summary: data.summary as string,
    downloadFile: data.downloadFile as string,
  };
}

export async function getReportSlugs(): Promise<string[]> {
  const entries = await fs.readdir(REPORTS_DIRECTORY, {
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export async function getReport(
  slug: string,
  locale: string
): Promise<Report | null> {
  if (path.basename(slug) !== slug) {
    return null;
  }

  const language = normalizeLocale(locale);
  const filePath = path.join(
    REPORTS_DIRECTORY,
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

    return {
      ...validateMetadata(slug, data),
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

export async function getAllReports(
  locale: string
): Promise<ReportMetadata[]> {
  const slugs = await getReportSlugs();

  const reports = await Promise.all(
    slugs.map((slug) => getReport(slug, locale))
  );

  return reports
    .filter((report): report is Report => report !== null)
    .map((report) => ({
        slug: report.slug,
        title: report.title,
        period: report.period,
        publishedAt: report.publishedAt,
        summary: report.summary,
        downloadFile: report.downloadFile,
      }))    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );
}