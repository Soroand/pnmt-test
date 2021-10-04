class User {
  constructor(
    id,
    fullName,
    isJobVerified,
    age,
    position,
    languages,
    avatar,
    country,
    handicap,
    rounds,
    gir,
    accuracy,
    friendsText,
    friendshipStatus,
  ) {
    this.id = id;
    this.fullName = fullName;
    this.isJobVerified = isJobVerified;
    this.age = age;
    this.position = position;
    this.languages = languages;
    this.avatar = avatar;
    this.country = country;
    this.handicap = handicap;
    this.rounds = rounds;
    this.gir = gir;
    this.accuracy = accuracy;
    this.friendsText = friendsText;
    this.friendshipStatus = friendshipStatus;
  }
}

export default User;
