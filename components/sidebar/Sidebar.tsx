import styles from "./sidebar.module.scss";
import { memo } from "react";
import cn from "classnames";
import Link from "next/link";

type SidebarProps = {
  readonly contents?: {
    readonly text: string | null;
    readonly id: string;
    readonly level: string;
  }[];
};

export const Sidebar = memo<SidebarProps>(({ contents }) => {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>table of contents</h2>
      <nav className={styles.nav}>
        {contents
          ? contents.map((content) => (
              <Link href={`#${content.id}`} key={content.id}>
                <a className={cn(styles.link, styles[content.level])}>{content.text}</a>
              </Link>
            ))
          : null}
      </nav>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";
