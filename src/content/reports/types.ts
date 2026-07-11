export type LocalizedText = {
    vi: string;
    en: string;
  };
  
  export type ReportContentBlock =
    | {
        type: "paragraph";
        content: LocalizedText;
      }
    | {
        type: "heading";
        content: LocalizedText;
      }
    | {
        type: "bullets";
        items: LocalizedText[];
      };
  
  export interface Report {
    slug: string;
    title: LocalizedText;
    period: LocalizedText;
    publishedAt: string;
    summary: LocalizedText;
    content: ReportContentBlock[];
    downloadFile: string;
  }