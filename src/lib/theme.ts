export const theme = {
    colors: {
      primary: '#7A5A2B',
      secondary: '#B89A5E',
      background: '#FAF8F5',
      text: '#2C2C2C',
      lightText: '#6B7280',
    },
    buttons: {
      primary: 'inline-flex items-center justify-center px-8 py-3.5 bg-[#7A5A2B] text-white font-medium rounded-lg hover:bg-[#684C24] transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto',
      secondary: 'inline-flex items-center justify-center px-8 py-3.5 bg-[#B89A5E] text-white font-medium rounded-lg hover:bg-[#9E834D] transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto',
      outline: 'inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-[#7A5A2B] border border-[#7A5A2B] font-medium rounded-lg hover:bg-[#FAF8F5] transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto',
      textLink: 'inline-flex items-center text-[#7A5A2B] font-medium hover:text-[#684C24] transition-colors',
    },
    cards: {
      base: 'bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100',
      iconWrapper: 'text-4xl mb-6 bg-[#FAF8F5] text-[#7A5A2B] w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-[#7A5A2B]/10',
    },
    typography: {
      h1: 'text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#2C2C2C] tracking-tight leading-tight',
      h2: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C2C2C] tracking-tight leading-tight',
      h3: 'text-2xl font-bold text-[#2C2C2C]',
      h4: 'text-xl font-bold text-[#2C2C2C]',
      sectionSubtitle: 'text-sm font-bold tracking-widest text-[#7A5A2B] uppercase mb-4 block',
      bodyText: 'text-lg text-[#6B7280] font-light leading-relaxed',
    },
    layout: {
      section: 'py-20 lg:py-32 w-full',
      container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    }
  };