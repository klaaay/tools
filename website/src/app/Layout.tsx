import GitHubCorners from "@uiw/react-github-corners";
import { Fragment } from "react";
import "@wcj/dark-mode";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.less";
import { ReactComponent as ShareIcon } from "../assets/share.svg";

export default function Layout() {
  return (
    <Fragment>
      <GitHubCorners size={52} href="https://github.com/jaywcjlove/tools" />
      <div className={styles.warpper}>
        <aside>
          <header>
            <h1>Web Tools</h1>
            <dark-mode permanent></dark-mode>
          </header>
          <nav>
            <NavLink to="/"> URL Encode </NavLink>
            <NavLink to="/url-parse"> URL Parse </NavLink>
            <NavLink to="/json-format"> JSON Format </NavLink>
            <NavLink to="/text-case"> Text Case </NavLink>
            <NavLink to="/image-to-base64"> Image to Base64 </NavLink>
            <div></div>
            <a
              href="https://tool.jisuapi.com/base642pic.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>Base64 to Image</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://uiwjs.github.io/npm-unpkg/"
              target="_blank"
              rel="noreferrer"
            >
              <span>NPM Unpkg</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://uiwjs.github.io/json-viewer/"
              target="_blank"
              rel="noreferrer"
            >
              <span>JSON Viewer</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://uiwjs.github.io/keycode-info/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Keycode Info</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://uiwjs.github.io/ui-color/"
              target="_blank"
              rel="noreferrer"
            >
              <span>UI Color</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://jaywcjlove.github.io/nginx-editor/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Nginx Editor</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://jaywcjlove.github.io/logo/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Logo Asset</span>
              <ShareIcon height={18} />
            </a>
            <a
              href="https://jaywcjlove.github.io/regexp-example/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Regexp Example</span>
              <ShareIcon height={18} />
            </a>
          </nav>
        </aside>
        <article>
          <Outlet />
        </article>
      </div>
    </Fragment>
  );
}
