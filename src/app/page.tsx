import UserProfile from '@/components/UserProfile';

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <UserProfile />
    </main>
  );
}
