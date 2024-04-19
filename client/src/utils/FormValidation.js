// Function to validate form fields
export const validateForm = (formData) => {
    const errors = {};
  
    // Check if name field is empty
    if (!formData.name) {
      errors.name = 'Name is required';
    }
  
    // Check if email field is empty or invalid
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
  
    // Check if message field is empty
    if (!formData.message) {
      errors.message = 'Message is required';
    }
  
    return errors;
  };
  
  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  