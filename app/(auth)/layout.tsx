const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex  justify-center items-center align-middle p-10 ">
      {children}
    </div>
  );
};
export default Layout;
