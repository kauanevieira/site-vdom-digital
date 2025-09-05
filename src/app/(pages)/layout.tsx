import Footer from "../components/footer";
import Header from "../components/header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}