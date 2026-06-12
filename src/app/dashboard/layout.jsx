import DashboardSidebar from "@/Components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
