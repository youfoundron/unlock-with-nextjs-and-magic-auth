import { useUser } from "@/hooks/useUser";
import { Spinner } from "@/components/Spinner";
import { UserInfo } from "@/components/UserInfo";
import { LoginForm } from "@/components/LoginForm";
import { useUnlock } from "@/hooks/useUnlock";
import { UnlockInfo } from "@/components/UnlockInfo";
import Link from "next/link";

export default function IndexPage() {
  const { paywall } = useUnlock();
  const { user, loading: userIsLoading } = useUser();

  const userIsLoggedIn = user;
  const userIsLoggedOut = !userIsLoading && !user;
  const userIsUnlockable = user && paywall;

  return (
    <div>
      <h1>Unlock with Next.js & Magic Auth</h1>
      <p>
        View on github:{" "}
        <a href="https://github.com/youfoundron/unlock-with-nextjs-and-magic-auth">
          https://github.com/youfoundron/unlock-with-nextjs-and-magic-auth
        </a>
      </p>
      <p>
        Try to pass the paywall <Link href="/paywall">here</Link>.
      </p>
      {userIsLoading && <Spinner />}
      {userIsLoggedIn && <UserInfo />}
      {userIsLoggedOut && <LoginForm />}
      {userIsUnlockable && <UnlockInfo />}
    </div>
  );
}
