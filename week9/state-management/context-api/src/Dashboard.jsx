import Profile from './Profile'
export default function Dashboard({ user }) {
  // Dashboard doesn't need user!
  return <Profile user={user} />;
}