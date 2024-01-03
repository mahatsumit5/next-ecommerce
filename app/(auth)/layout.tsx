import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" flex  flex-col justify-center items-center align-middle p-10 ">
        {children}
      </div>
    </>
  );
};
export default Layout;
