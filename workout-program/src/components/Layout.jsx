export default function Layout(props) {
    const { children } = props
    const header =(
        <header>
            <h1 className="text-gradient">Get Gains Fast</h1>
            <p><strong>30 Day Workout Plan</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Built by <a href="https://rayanrizvi.netlify.app/" target="_blank">Rayan Rizvi</a><br />Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}