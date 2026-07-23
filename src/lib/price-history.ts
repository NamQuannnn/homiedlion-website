const PRICE_HISTORY_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSto_gz-tZutoIEYj3Fsp0vZv8oq12iuU73KIcYY_OhCO2HfeEFt4NtUCxgRX2Qv5_booRS6P98elBr/pub?gid=0&single=true&output=csv";

export type PriceHistoryRow = {
  date: string;
  [grade: string]: string | number | null;
};

export type PriceHistoryData = {
  rows: PriceHistoryRow[];
  grades: string[];
};

function parseNumber(value: string | undefined): number | null {
  if (!value) return null;

  const normalized = value
    .trim()
    .replace(/^"|"$/g, "")
    .replace(",", ".");

  const number = Number(normalized);

  return Number.isFinite(number) ? number : null;
}

/**
 * Đọc một dòng CSV nhưng vẫn giữ nguyên giá trị có dấu phẩy
 * ví dụ: "3,15" không bị tách thành 3 và 15.
 */
function parseCsvLine(line: string): string[] {
  const values: string[] = [];

  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else {
        insideQuotes = !insideQuotes;
      }

      continue;
    }

    if (char === "," && !insideQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());

  return values;
}

export async function getPriceHistory(): Promise<PriceHistoryData> {
  const response = await fetch(PRICE_HISTORY_CSV_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load price history.");
  }

  const csv = await response.text();

  const lines = csv
    .trim()
    .split(/\r?\n/)
    .filter(Boolean);

  if (lines.length <= 1) {
    return {
      rows: [],
      grades: [],
    };
  }

  const headers = parseCsvLine(lines[0]).map((header) =>
    header.trim()
  );

  const dateIndex = headers.findIndex(
    (header) => header.toLowerCase() === "date"
  );

  const grades = headers.filter(
    (header) =>
      header &&
      header.toLowerCase() !== "date"
  );

  const rows: PriceHistoryRow[] = lines
    .slice(1)
    .map((line) => {
      const columns = parseCsvLine(line);

      const row: PriceHistoryRow = {
        date:
          dateIndex >= 0
            ? columns[dateIndex]?.trim() ?? ""
            : "",
      };

      grades.forEach((grade) => {
        const columnIndex = headers.indexOf(grade);

        row[grade] = parseNumber(
          columns[columnIndex]
        );
      });

      return row;
    })
    .filter((row) => row.date);

  return {
    rows,
    grades,
  };
}