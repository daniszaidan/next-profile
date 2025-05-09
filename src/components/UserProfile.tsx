'use client';

import CodeBlock from '@/components/CodeBlock';
import { useUserProfile } from '@/data/useUserProfile';

export default function UserProfile() {
  const { user, isLoading, error } = useUserProfile();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Failed to load user data.</p>;

  return (
    <div className="space-y-4 bg-white shadow-2xl rounded-3xl p-4">
      <p>
        <span className="font-semibold">Name:</span> {user?.name}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {user?.email}
      </p>
      <div>
        <p className="font-semibold mb-3">Public Key:</p>
        <CodeBlock code={user?.publicKey ?? ''} />
      </div>
    </div>
  );
}
