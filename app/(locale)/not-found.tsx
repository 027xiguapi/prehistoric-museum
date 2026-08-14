import {
  seoNotFoundCopy,
  seoNotFoundReturnPath,
} from '../../src/seo/metadata'

export default function LocaleNotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, follow" />
        <title>{seoNotFoundCopy.title}</title>
        <style>{`body{margin:0;padding:3rem;background:#d8e7c2;color:#20382f;font:1.1rem/1.6 system-ui,sans-serif}main{max-width:42rem;margin:auto}a{color:inherit;font-weight:700}`}</style>
      </head>
      <body>
        <main>
          <h1>
            404 · Page not found · <span lang="zh-CN">页面没有找到</span>
          </h1>
          <p>
            <span lang="en">The trail ends here.</span>{' '}
            <span lang="zh-CN">这条参观路线暂时走不通。</span>
          </p>
          <p>
            <a data-museum-return href={seoNotFoundReturnPath}>
              <span lang="en">Return to the museum</span> ·{' '}
              <span lang="zh-CN">返回博物馆</span>
            </a>
          </p>
        </main>
      </body>
    </html>
  )
}
