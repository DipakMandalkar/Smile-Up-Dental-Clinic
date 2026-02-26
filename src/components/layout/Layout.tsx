import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Layout;
