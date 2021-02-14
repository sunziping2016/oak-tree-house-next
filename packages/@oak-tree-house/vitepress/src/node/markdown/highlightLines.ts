// Modified from https://github.com/egoist/markdown-it-highlight-lines
import MarkdownIt from 'markdown-it'

const RE = /{([\d,-]+)}/
const wrapperRE = /^<pre .*?><code>/

export function highlightLinePlugin(md: MarkdownIt): void {
  const fence = md.renderer.rules.fence
  if (fence === undefined) {
    throw new Error('no render rule for fence')
  }
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, options] = args
    const token = tokens[idx]

    const rawInfo = token.info
    const m = RE.exec(rawInfo)
    if (!rawInfo || !m) {
      return fence(...args)
    }

    const langName = rawInfo.replace(RE, '').trim()
    // ensure the next plugin get the correct lang.
    token.info = langName

    const lineNumbers = m[1]
      .split(',')
      .map((v) => v.split('-').map((v) => parseInt(v, 10)))

    const code = options.highlight
      ? options.highlight(token.content, langName, '')
      : token.content

    const rawCode = code.replace(wrapperRE, '')
    const highlightLinesCode = rawCode
      .split('\n')
      .map((split, index) => {
        const lineNumber = index + 1
        const inRange = lineNumbers.some(([start, end]) => {
          if (start && end) {
            return lineNumber >= start && lineNumber <= end
          }
          return lineNumber === start
        })
        if (inRange) {
          return `<div class="highlighted">&nbsp;</div>`
        }
        return '<br>'
      })
      .join('')

    const highlightLinesWrapperCode = `<div class="highlight-lines">${highlightLinesCode}</div>`

    return highlightLinesWrapperCode + code
  }
}
