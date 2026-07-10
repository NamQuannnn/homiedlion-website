export const theme = {
  colors: {
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    secondary: "var(--color-secondary)",
    background: "var(--color-background)",
    surface: "var(--color-surface)",
    text: "var(--color-text)",
    lightText: "var(--color-text-secondary)",
    border: "var(--color-border)",
  },

  buttons: {
    primary:
      "inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-3.5 font-medium text-white shadow-sm transition-all duration-300 hover:bg-[var(--color-primary-hover)] hover:shadow-md sm:w-auto",

    secondary:
      "inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-secondary)] px-8 py-3.5 font-medium text-white shadow-sm transition-all duration-300 hover:opacity-90 hover:shadow-md sm:w-auto",

    outline:
      "inline-flex w-full items-center justify-center rounded-lg border border-[var(--color-primary)] bg-transparent px-8 py-3.5 font-medium text-[var(--color-primary)] shadow-sm transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:shadow-md sm:w-auto",

    textLink:
      "inline-flex items-center font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]",
  },

  cards: {
    base:
      "flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",

    iconWrapper:
      "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-primary-light)] text-4xl text-[var(--color-primary)] shadow-sm",
  },

  typography: {
    h1:
      "text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl",

    h2:
      "text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl",

    h3: "text-2xl font-bold text-[var(--color-text)]",

    h4: "text-xl font-bold text-[var(--color-text)]",

    sectionSubtitle:
      "mb-4 block text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]",

    bodyText:
      "text-lg font-light leading-relaxed text-[var(--color-text-secondary)]",
  },

  layout: {
    section: "w-full py-20 lg:py-32",
    container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  },
};