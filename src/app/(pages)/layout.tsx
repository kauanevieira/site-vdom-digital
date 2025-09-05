import Footer from "../components/footer";
import Header from "../components/header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex mt-[72px] flex-1">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}