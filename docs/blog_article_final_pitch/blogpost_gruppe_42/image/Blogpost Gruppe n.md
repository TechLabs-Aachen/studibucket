
# Blogpost Web Development Group 1 - Studibucket Project

## Introduction

Our project is a budgeting mobile app for students to manage their finances and to make economical plans. In modern time, it could be excruciatingly difficult for students to track their daily expences and make future saving plans. Our mobile app solves this problem in that it allows users to organise and monitor their income streams, expences and savings by employing "buckets", hence the name Studibucket. Buckets are analogical to piggy banks, which could be dynamically allocated to proportions of income and expenditure to facilitate making financial decision, such as vacations, laptops etc...

![image1.jpg](../_resources/piggy_bank.jpg)

## Method

In the beginning, we chose the React Native framework to build our mobile app for the reason of having learned the popular React.js framework in the learning phase of the TechLabs bootcamp and unlike other mobile app frameworks such as Flutter or Svelte, considerably major amount knowledge of React.js can be carried over in mobile app development which makes it highly practical for us students to extend our knowledge in frontend web development. Typescript is chosen because of the type safety and debugging comfort it provides.

The Expo SDK was our sandbox of choise to easily emulate our app in real time and debug it on the browser during development. As for the backend, we chosed Firebase Firestore for database and Auth for user authentication because of its straitforward useage, security handling and easily understandable documentation.

We chose prominent popular Zustand for state management because of its relatively less boiler plate code and easy learning curve.

- Step 0: React and TS Workshops with the mentors
- Step 1: Setting up the work environment (installations of frameworks and libraries, VS Code configurations, emulator, Firebase account)
- Step 2: Concept and workflow design on Excalidraw
- Step 3: Design of the frontend and themening in Figma
- Step 4: Starting the basic coding of pages
- Step 5: Test of backend connection of Firestore and Auth
- Step 6: Implemention of frontend with thememing
- Step 7: Connecting the Firestore and Auth with the frontend code
- Step 8: Adding finishing touches and testing

![image3.gif](../_resources/Figma.png)
Design in Figma (make it center)

(add picture of the actual app)

### Review of the tools and frameworks in detail

TypeScript, chosen for Studibucket, enhances code quality by adding static typing to JavaScript. This ensures early error detection, reducing runtime bugs and improving maintainability. However, TypeScript might require a slight learning curve, especially for developers new to static typing. Overall, it's a valuable tool for robust and scalable app development.

React Native offered several advantages for our project. It facilitated code reusability between the web and mobile app, reducing development time and effort. The framework benefits from a large and active community, providing access to a wealth of libraries, tools, and resources. Additionally, React Native allowed us to target both iOS and Android platforms simultaneously.

On the downside, React Native had some limitations, particularly in handling complex native features. While it supported native module integration, intricate native functionalities might require custom native code. Additionally, for graphics-intensive applications, performance could be a concern.

To streamline development and testing, we relied on the Expo SDK, which provided real-time emulation and browser-based debugging. Expo simplified the development process, allowing us to focus on building features rather than dealing with complex configurations. This approach expedited our development process and enabled us to deliver a robust app.

However, Expo did have its limitations. It offered limited customization options, which could be restrictive for projects requiring extensive custom native module integration and low-level configurations.

For the backend, Firebase Firestore served as our database, offering straightforward usage, robust security handling, and well-documented features. Firebase Auth was chosen for user authentication, ensuring a secure and user-friendly experience. Firebase provided real-time database synchronization, scalability, and versatile authentication methods. Nevertheless, it had vendor lock-in concerns due to its association with Google and some limitations in handling complex queries.

In terms of state management, we opted for Zustand due to its efficiency in reducing boilerplate code and its gentle learning curve, making it a suitable choice for our student project. Zustand's minimal boilerplate code and simplicity made it an ideal fit for our application. However, it had a smaller community compared to larger state management solutions like Redux.
## Project Result

(Here you describe the project results. You're free in how you do it. Maybe again an image? But be aware even if an image may be worth thousands of words, it does not count as thousands of words!
Maybe you feel like embedding some few lines of code. But please be aware of the meaning of the word **few**. )

The Studibucket app has emerged as a powerful tool for students seeking to manage their finances effectively. With a user-friendly interface, the app allows users to create and allocate "buckets" for various expenses and savings goals, mirroring the concept of traditional piggy banks. The project resulted in a robust mobile app that simplifies financial decision-making for students.

## Conclusion

(Conclude what you archieved! You may add your names, and if you want also a link to your LinkedIn or GitHub.
 Possibilities to improve
 Future work / Outlook)

In conclusion, our journey with the Studibucket project has been both educational and rewarding. We have successfully developed a budgeting mobile app that addresses the financial challenges faced by students today. Our choice of technologies, including React Native, TypeScript, Expo SDK, Firebase Firestore, and Zustand, has proven to be effective in achieving our project goals.

### Future Work/Outlook

As we look ahead, there are several avenues for further improvement and expansion of the Studibucket app. Future work includes:

Adding additional features such as expense tracking graphs and financial tips to enhance user engagement.
Expanding platform compatibility to reach a wider audience, including both iOS and Android users.
Incorporating machine learning algorithms to provide personalized financial recommendations.
Strengthening security measures and user data protection to ensure a safe user experience.
Collaborating with educational institutions to promote financial literacy among students.
The Studibucket project has the potential to revolutionize how students manage their finances, and we are excited to continue its development journey. Thank you for joining us on this adventure, and we look forward to the future of Studibucket.