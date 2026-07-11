export type ReportLocale = "vi" | "en";

export interface ReportMetadata {
  slug: string;
  title: string;
  period: string;
  publishedAt: string;
  summary: string;
  downloadFile: string;
}

export interface Report extends ReportMetadata {
  contentHtml: string;
}