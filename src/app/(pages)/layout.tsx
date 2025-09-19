import Footer from '../components/footer';
import Header from '../components/header';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex mt-[72px] flex-1 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">{props.children}</main>
      <Footer />
    </div>
  );
}
