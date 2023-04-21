import { useState, useEffect } from "react";

interface CheckUsernameResponse {
  isTaken: boolean;
}

const useCheckUsername = (username: string): boolean | null => {
  const [isTaken, setIsTaken] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(`/api/user/check/username/${username}`);
        const data: CheckUsernameResponse = await response.json();
        setIsTaken(data.isTaken);
      } catch (error) {
        console.error(error);
        setIsTaken(null);
      }
    };

    if (username) {
      fetchUsername();
    }
  }, [username]);

  return isTaken;
};

export default useCheckUsername;
