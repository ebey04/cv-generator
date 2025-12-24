# 📄 Resume Generator

A responsive resume builder built with React that allows users to enter personal, education, and work history information and instantly preview a formatted resume. Data persists between page refreshes using `localStorage`, and the resume can be printed directly from the browser.

## 🔗 Live Demo
👉 **[View Live Demo](https://your-live-demo-link-here)**

---

## ✨ Features

- Dynamic form sections for:
  - Personal Information
  - Education History
  - Work Experience
- Add multiple education and work entries
- Live resume preview that updates as you type
- Persistent form data using `localStorage`
- Print-ready resume output
- Responsive layout (mobile-friendly)
- Reusable form components (inputs & buttons)

---

## 🛠 Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS**
- **Vite**
- **HTML**
- **localStorage API**

---

## 🧠 What I Learned

This project was a major turning point in my understanding of React, especially around state management.

Key takeaways:

- **Lifting state up**  
  I initially managed state locally inside each component, but as the app grew, I learned how and why to lift state into a common parent component so multiple children could share and update the same data.

- **Advanced `useState` patterns**  
  I had to go back and deepen my understanding of `useState`, particularly:
  - Managing arrays of objects
  - Updating deeply nested state immutably
  - Passing update functions down as props

- **Controlled components**  
  Every input in the app is controlled by React state, which helped reinforce how data flows in one direction in React.

- **Separation of concerns**  
  I learned how to structure components so that:
  - Parent components own state and logic
  - Child components focus on rendering UI

- **Persisting state with `localStorage`**  
  Implementing save/load functionality taught me how to synchronize React state with browser storage using `useEffect`.

- **UI/UX considerations**  
  Beyond functionality, I focused on:
  - Clean visual hierarchy
  - Responsive layout behavior
  - Making design decisions that scale as more data is added

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/ebey04/cv-generator

# Navigate into the project
cd cv-generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📌 Future Improvements 

- Export resume as PDF

- Add form validation for required fields

- Improve accessibility and keyboard navigation

- Allow multiple saved resumes

- Theme customization options

## 📝 Notes

This project was built as part of my React learning journey and reflects a focus on real-world patterns rather than tutorial shortcuts. It helped solidify how React handles state, data flow, and component composition in a practical application.