/**
 * This site ships a single, permanent light theme by design (no dark mode).
 * The inline script only exists so the `dark` utility class is never present
 * on <html>, keeping every page on the light token set.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "document.documentElement.classList.remove('dark');",
      }}
    />
  );
}
