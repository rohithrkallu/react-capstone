import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <nav aria-label="Footer" style={styles.nav}>
                <ul style={styles.list}>
                    <li style={styles.item}><a href="/about" style={styles.link}>About</a></li>
                    <li style={styles.item}><a href="/contact" style={styles.link}>Contact</a></li>
                    <li style={styles.item}><a href="/privacy" style={styles.link}>Privacy</a></li>
                    <li style={styles.item}><a href="/terms" style={styles.link}>Terms</a></li>
                    <li style={styles.item}>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            GitHub
                        </a>
                    </li>
                    <li style={styles.item}>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            Twitter
                        </a>
                    </li>
                </ul>
            </nav>
            <div style={styles.copy}>© {year} My Project</div>
        </footer>
    );
}

const styles = {
    footer: {
        padding: "1rem",
        borderTop: "1px solid #e6e6e6",
        textAlign: "center",
        background: "#fafafa",
    },
    nav: {
        marginBottom: "0.5rem",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        gap: "0.75rem",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    item: {},
    link: {
        color: "#0366d6",
        textDecoration: "none",
        fontSize: "0.95rem",
    },
    copy: {
        fontSize: "0.85rem",
        color: "#666",
    },
};