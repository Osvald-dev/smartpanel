export const generateRandomPhoneNumber = () => {
  const phoneNumbers = [
    '5493517038778'
  ];

  const randomIndex = Math.floor(Math.random() * phoneNumbers.length);

  return phoneNumbers[randomIndex];
};