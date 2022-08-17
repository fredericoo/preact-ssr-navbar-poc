import Counter from "./Counter"
import logo from "./assets/logo.svg"
import  "./styles.css"

export { Page }

function Page() {
  return (
    <nav><img src={logo} height="24" width="86" /> <Counter /></nav>
  )
}