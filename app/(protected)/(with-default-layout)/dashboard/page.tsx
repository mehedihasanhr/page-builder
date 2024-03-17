import { auth } from "@/lib/auth";

async function DashboardPage() {
  const session = await auth();
  return (
    <div className="p-4">
      <div className="flex">{JSON.stringify(session)}</div>
    </div>
  );
}

export default DashboardPage;
