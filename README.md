Task 9: Client-Side Form Validation
Project Overview
This project involves creating a robust registration form using HTML, CSS, and JavaScript. The primary goal was to implement custom client-side validation logic while disabling default browser validation to ensure a seamless and controlled user experience.


Features Implemented

HTML Form Structure: Developed a registration form with fields for Name, Email, Password, and Confirm Password.


Custom Validation Logic: Built JavaScript functions using conditions and Regular Expressions (Regex) to validate user input.


Real-time Feedback: Integrated blur and keyup event listeners to provide instant validation feedback as the user interacts with the fields.


Dynamic Error Handling: Instead of using alert boxes, error messages are displayed dynamically below each input field.


State Styling: Used CSS classes to toggle between error (red borders) and success (green borders) states based on validation results.


Submission Control: Utilized event.preventDefault() to block form submission until all validation criteria are met.

Validation Rules

Name: Must be at least 3 characters long.


Email: Validated against a standard email format using Regular Expressions.


Password: Checked for strength (minimum 6 characters and at least one number).


Confirm Password: Must match the original password field.


Tools Used

Primary: VS Code and Browser DevTools.


Language: HTML5, CSS3, and Vanilla JavaScript.


