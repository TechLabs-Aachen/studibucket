
# Blogpost Web Development Group 1 - Studibucket Project

## Introduction

(Here you introduce the reader to your problem. It might help to add an image to clear things up. What’s your project about? What’s the topic? What problem does your project solve?)

Our project is a budgeting mobile app for students to manage their finances and to make economical plans. In modern time, it could be excruciatingly difficult for students to track their daily expences and make future saving plans. Our mobile app solves this problem in that it allows users to organise and monitor their income streams, expences and savings by employing "buckets", hence the name Studibucket. Buckets are analogical to piggy banks, which could be dynamically allocated to proportions of income and expenditure to facilitate making financial decision, such as vacations, laptops etc...

![image1.jpg](../_resources/piggy_bank.jpg)

## Method

(Here you show how you solved the problem. Maybe you want to show some bulletpoints to guide the reader through What methods were used to solve the problem? What was your approach?)

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

![image3.gif](../_resources/Figma.png)  (add picture of the actual app)

It's also possible to add a .gif But this should be used with caution! It can get distracting and unprofessional easily.

## Project Result

Here you describe the project results. You're free in how you do it. Maybe again an image? But be aware even if an image may be worth thousands of words, it does not count as thousands of words!
Maybe you feel like embedding some few lines of code. But please be aware of the meaning of the word **few**.

 Outcome
 Issues faced during the project

```
import numpy as pd
import pandas as plt
import matplotlib.pyplot as np

# Some people want to see the world burn

df = plt.DataFrame(pd.array([1,2,3]))
````
 
If you need some formula [this](http://latex2png.com/) might come in handy to convert latex syntax to an image file. But you're free to use whatever you want as long as it produces image files. Please be aware adding formulas as images is the only feasible way to include math syntax. 



![formula.png](../_resources/68c1f587d74c45d3a2a34fd16dd45b9b.png)
If you want to add captions just write them in a paragraph right under the image. Otherwise please skip one line. In Medium we will add the captions accordingly.




## Conclusion

Conclude what you archieved! You may add your names, and if you want also a link to your LinkedIn or GitHub.
 Possibilities to improve
 Future work / Outlook
Team Members:
- Techlabs Aachen, [LinkedIn](https://de.linkedin.com/showcase/techlabs-aachen)

## Export

After writing everything please export it into a single folder. You can share it with us e.g. via OneDrive or as a .zip file. The folder should be structured similar as following:

```
.
└── blogpost_gruppe_n/
	├── post.md
    └── images/
        ├── image_1
        ├── image_2
        ├── ...
        └── image_m
```

If you use the Joplin export function:
- please use the Option "markdown"
- Choose an empty folder as target
- Send the complete folder to us e.g. via OneDrive

It should then look something like this:

```
.
└── blogpost_gruppe_n/
    └── post/
        └── post.md
    └── _resources/
        ├── 70a56c8d78f3a2f2db9d81cb079.jpg
        ├── 072602f26fb3007296ce75da208.jpg
        ├── ...
        └── acaee1febda81f898cc1728c955.png
```

Thanks for your help and well done!

# Cheatsheet

# Headline
## Subheadline

- Bullet Point 1
- Bullet Point 2


1. Enumerate this
2. Enumerate that
3. Enumerate everything

```
Code Block
```

**bold**

[Link as displayed in text](actual-link.techlabs)

![Text if image not found](path/to/actual/image.png)





