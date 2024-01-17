const users = [
  {
    name: 'john doe',
    bio: 'digital artist with 10 years of experience',
  },
  {
    name: 'kelly mierl',
    bio: 'wx software engineer at Google',
  },
  {
    name: 'jordan hudders',
    bio: 'webflow developer with 3 years of experience and 5x webflow designer of the year awards',
  },
];

const ListUser = ({ user }: { user: (typeof users)[number] }) => {
  return (
    <div>
      <h6>{user.name}</h6>
      <p>{user.bio}</p>
    </div>
  );
};

export default ListUser;
