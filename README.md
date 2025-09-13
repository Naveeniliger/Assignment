# 🌟 Frontend Internship Assignment — UI Challenge

A polished, animated, and responsive MCQ quiz application built with React and Redux.

# Tech Stack--

React (Vite) - Component-based UI framework

Redux Toolkit - State management

Tailwind CSS - Utility-first styling

Custom CSS Animations - Micro-interactions and transitions

#  State Management

Redux Store manages all application state:

# questions: Array of MCQ data

currentQuestionIndex: Current question position

answers: User's selected answers

isSubmitted: Quiz submission status

#  State Flow:

Questions loaded from JSON data into Redux store

User interactions dispatch actions to update state

Components re-render based on state changes

Results calculated from state data on submission


#  File Structure
src/
├── components/
│   ├── ProgressIndicator.jsx  # Progress bar and counter
│   ├── QuestionCard.jsx       # Question display
│   ├── Option.jsx            # Interactive answer options
│   ├── Controls.jsx          # Navigation buttons
│   └── Results.jsx           # Score summary
├── store/
│   ├── store.js              # Redux store configuration
│   └── quizSlice.js          # State and reducers
└── data/
    └── questions.js          # Dummy MCQ data

#  Theming & Design

#  Color Palette (Following brand guidelines):

Primary: #2563EB (Blue) for main actions

Success: #00B75F (Ainstein Green) for correct states

Warning: #FF9D33 (Sunburst Orange) for incorrect states

Neutral grayscale for text and backgrounds

---Typography:

Headings: 18-20px

Body: 14-16px

Labels: 12-14px

Line-height: 1.5 for readability


 #  Features Implemented
 
✅ Core Functionality
5 multiple-choice questions flow

Progress tracking with visual indicator

Answer validation before submission

Score calculation with points summary

✅ UI/UX Excellence
Mobile-first responsive design (320px to 1024px+)

Smooth animations:

Option selection scale effects

Progress bar smooth transitions

Submit button shake animation for validation

Results fade-in animation

Micro-interactions:

Hover/focus states for all interactive elements

Scale transformations on option selection

Disabled state visual feedback

✅ Accessibility
Keyboard navigation support

Screen reader friendly ARIA labels

Focus indicators for all interactive elements

High contrast color ratios (≥ 4.5:1)

Reduced motion support via CSS media queries

✅ Technical Quality
Clean component architecture

Modular and reusable components

Efficient state management with Redux

Custom CSS animations without external libraries

Responsive design with Tailwind CSS

📱 Responsiveness
Mobile-first approach (320px and up)

Breakpoints supported: 320px, 768px, 1024px

Sticky footer for action buttons on mobile

No horizontal scroll on any device

Touch-friendly 44px minimum tap targets