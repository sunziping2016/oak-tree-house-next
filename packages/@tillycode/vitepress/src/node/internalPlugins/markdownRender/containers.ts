import Token from 'markdown-it/lib/token'
import container from 'markdown-it-container'

type ContainerArgs = [
  typeof container,
  [
    string,
    {
      render(tokens: Token[], idx: number): string
    }
  ]
]

export function createContainer(
  klass: string,
  defaultTitle: string
): ContainerArgs {
  return [
    container,
    [
      klass,
      {
        render(tokens, idx) {
          const token = tokens[idx]
          const info = token.info.trim().slice(klass.length).trim()
          if (token.nesting === 1) {
            return `<div class="${klass} custom-block"><p class="custom-block-title">${
              info || defaultTitle
            }</p>\n`
          } else {
            return `</div>\n`
          }
        }
      }
    ]
  ]
}
