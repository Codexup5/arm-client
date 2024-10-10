import { ProfileDetails, ProfileHeader, useProfile } from 'entities/profile';

export const ProfilePage = () => {
    const { user, loadingStatus, onUpdate } = useProfile();

    return (
        <>
            <ProfileHeader
                user={{
                    name: user.name,
                    familyName: user.familyName,
                    email: user.email,
                }}
            />

            <ProfileDetails user={user} loading={loadingStatus === 'loading'} onUpdate={onUpdate} />
        </>
    );
};
