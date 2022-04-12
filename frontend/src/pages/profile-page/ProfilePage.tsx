import "./profile-page.scss";
import { ProfileCard } from "../../components/cards/profile-card/ProfileCard";

export const ProfilePage = () => {
  return (
    <div className="profile-page flex jc-c container">
      <ProfileCard></ProfileCard>
    </div>
  );
};
