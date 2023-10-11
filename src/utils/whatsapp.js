export const generateRandomPhoneNumber = () => {
    const phoneNumbers = ['123456789', '987654321', '555555555', '999888777'];
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
  };