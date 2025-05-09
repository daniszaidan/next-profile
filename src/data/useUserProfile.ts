import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  publicKey: string;
};

export function useUserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        // Simulate a publicKey for demo purposes
        const publicKey = btoa(`user-${data.id}-public-key`);
        setUser({ ...data, publicKey });
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { user, isLoading, error };
}
