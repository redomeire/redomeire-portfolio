import Appbar from "@/components/partials/appbar";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Appbar />
      <div
        style={{
          paddingTop: "120px",
          minHeight: "100vh",
        }}>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
