export default (member) => {
  if (!member) return [];

  return member.roles.cache;
};
