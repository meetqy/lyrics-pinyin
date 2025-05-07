# Lyrics Pinyin

A free online platform that helps you learn Chinese through music by providing synchronized pinyin lyrics.

## Features

- 🎵 **Synchronized View**: Chinese characters with pinyin above
- 📝 **Full Pinyin Coverage**: Every character includes pinyin notation
- 🖨️ **Print Support**: Print-friendly format for offline learning
- 💾 **PDF Download**: Save lyrics for offline use
- 🆓 **Always Free**: No registration required, instant access

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Strapi (Headless CMS)
- **Database**: PostgreSQL
- **Deployment**: Vercel (Frontend), Digital Ocean (Backend)

## Getting Started

### Prerequisites

```bash
node >= 18
pnpm >= 8
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/meetqy/lyrics-pinyin.git
cd lyrics-pinyin
```

2. Install dependencies

```bash
# Install frontend dependencies
cd nextjs
pnpm install

# Install backend dependencies
cd ../strapi
pnpm install
```

3. Set up environment variables

```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:1337

# Backend (.env)
DATABASE_URL=postgresql://...
```

4. Start development servers

```bash
# Start frontend
cd nextjs
pnpm dev

# Start backend
cd strapi
pnpm develop
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- Email: meetqy@icloud.com
- Twitter: [@meetqy](https://twitter.com/meetqy)
- Website: [lyrics-pinyin.com](https://lyrics-pinyin.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
