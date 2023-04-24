  // Create 'people' object with an enmpty 'friends' array
const people = {
    friends: []
  };
  
  // Create three friend objects
  const friend1 = {
    firstName: "Jimmy",
    lastName: "Boi",
    id: 123
  };
  
  const friend2 = {
    firstName: "Stacy",
    lastName: "Boba",
    id: 456
  };
  
  const friend3 = {
    firstName: "Bob",
    lastName: "Bobstinky",
    id: 789
  };
  
  // Add the friend objects to the friends array inside the people object
  people.friends.push(friend1);
  people.friends.push(friend2);
  people.friends.push(friend3);
  
  // Output the people object to the console
  console.log(people);
  