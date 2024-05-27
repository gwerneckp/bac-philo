import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        {/* <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p> */}
        <p>
          Voulez vous contribuer? Faites un pull request sur{" "}
          <a target="_blank" href="https://github.com/gwerneckp/bac-philo">
            GitHub
          </a>
        </p>
        <p>
          <a target="_blank" href="/">
            bacdephilosophie.com
          </a>{" "}
          par{" "}
          <a target="_blank" href="https://instagram.com/gwerneckp">
            Gabriel Werneck
          </a>{" "}
          est licencié sous{" "}
          <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1">
            CC BY-SA 4.0{" "}
          </a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
