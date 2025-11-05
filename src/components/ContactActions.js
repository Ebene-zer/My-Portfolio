export default function ContactActions({ whatsappHref }) {
  return (
    <div className="flex flex-col gap-3">
      <a
        href="mailto:fuachie717@gmail.com?subject=Hello%20Ebenezer&body=Hi%20Ebenezer%2C%20"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-gold)] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        aria-label="Email Ebenezer"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-black">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.236l7.386 5.54a1 1 0 0 0 1.228 0L20 8.236V18H4Z" />
        </svg>
        Email me
      </a>

      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366] px-5 py-3 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D3661A]"
          aria-label="WhatsApp Ebenezer"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]">
            <path d="M20.52 3.48A11.983 11.983 0 0 0 12.01 0C5.4 0 .05 5.35.05 11.96c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.81 1.52h.01c6.61 0 11.96-5.35 11.96-11.96 0-3.2-1.25-6.2-3.46-8.46ZM12.02 21.3h-.01a9.34 9.34 0 0 1-4.76-1.31l-.34-.2-3.68.96.98-3.59-.22-.37a9.3 9.3 0 0 1-1.43-4.95c0-5.15 4.19-9.34 9.35-9.34 2.5 0 4.85.97 6.61 2.73a9.27 9.27 0 0 1 2.73 6.61c0 5.16-4.2 9.34-9.43 9.34Zm5.38-6.98c-.29-.14-1.73-.86-2-.96-.27-.1-.46-.14-.66.14-.19.28-.76.96-.94 1.15-.17.19-.35.21-.64.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.19-.28.29-.48.1-.2.05-.38-.02-.52-.07-.14-.66-1.6-.91-2.19-.24-.57-.49-.49-.66-.5-.17-.01-.36-.01-.55-.01-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.14.19 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.24-.67.24-1.25.17-1.39-.07-.14-.26-.22-.55-.36Z" />
          </svg>
          WhatsApp
        </a>
      ) : (
        <span
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-400 cursor-not-allowed select-none dark:border-gray-700 dark:text-gray-500"
          aria-disabled="true"
          title="Set NEXT_PUBLIC_WHATSAPP to enable WhatsApp"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-gray-300 dark:fill-gray-600">
            <path d="M20.52 3.48A11.983 11.983 0 0 0 12.01 0C5.4 0 .05 5.35.05 11.96c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.81 1.52h.01c6.61 0 11.96-5.35 11.96-11.96 0-3.2-1.25-6.2-3.46-8.46ZM12.02 21.3h-.01a9.34 9.34 0 0 1-4.76-1.31l-.34-.2-1.5.39a1 1 0 0 1-1.2-1.2l.39-1.5-1.31-.34a9.34 9.34 0 0 1-1.31-4.76v-.01a9.34 9.34 0 0 1 1.31-4.76l.34-.2-.39-1.5a1 1 0 0 1 1.2-1.2l1.5.39.2-.34A9.34 9.34 0 0 1 12.02 3h.01a9.34 9.34 0 0 1 4.76 1.31l.34.2 1.5-.39a1 1 0 0 1 1.2 1.2l-.39 1.5.2.34A9.34 9.34 0 0 1 21.3 12h.01a9.34 9.34 0 0 1-1.31 4.76l-.34.2.39 1.5a1 1 0 0 1-1.2 1.2l-1.5-.39-.2.34A9.34 9.34 0 0 1 12.02 21.3Z" />
          </svg>
          WhatsApp
        </span>
      )}

      <a
        href="https://www.linkedin.com/in/fuachie-ebenezer/"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0A66C2] px-5 py-3 text-sm font-medium text-[#0A66C2] transition hover:bg-[#0A66C21A]"
        aria-label="Open LinkedIn profile in new tab"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#0A66C2]">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2V22h3V10ZM8 10h3v1.75h.04c.42-.8 1.44-1.64 2.97-1.64C18.17 10.11 19 12 19 14.83V22h-3v-6.3c0-1.5-.03-3.42-2.09-3.42-2.1 0-2.42 1.64-2.42 3.32V22H8V10Z" />
        </svg>
        LinkedIn
      </a>

      <a
        href="https://github.com/Ebene-zer"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-black px-5 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
        aria-label="Open GitHub profile in new tab"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.16 8.98 7.55 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.22-1.63-1.22-1.63-.99-.68.07-.66.07-.66 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.53 1.18 3.15.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.12-2.95-.11-.27-.49-1.36.11-2.83 0 0 .93-.3 3.05 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.12-1.42 3.05-1.13 3.05-1.13.6 1.47.22 2.56.11 2.83.69.77 1.12 1.75 1.12 2.95 0 4.23-2.58 5.15-5.04 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.59-.01 2.94 0 .3.2.64.75.53 4.39-1.45 7.55-5.57 7.55-10.43C23.02 5.24 18.27.5 12 .5Z" />
        </svg>
        GitHub
      </a>
    </div>
  );
}
