# Echo Empathy

![Echo Empathy Logo](/client/public/faviconlogo.jpg)

## Table of Contents
- [Introduction](#introduction)
- [Inspiration](#inspiration)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation and Usage](#installation-and-usage)
- [Challenges](#challenges)
- [Accomplishments](#accomplishments)
- [What We Learned](#what-we-learned)
- [Future Plans](#future-plans)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Echo Empathy is a web application designed to connect individuals experiencing mental health challenges with others in similar situations, using shared experiences posted on Reddit. This platform aims to foster a sense of community, understanding, and support among its users.

## Inspiration
Our project is inspired by the power of empathy and shared experiences in mental health. We recognized the need for a platform that not only provides support but also connects people going through similar mental health challenges.

## Features
- **Emotionally Intelligent Matching**: Utilizes OpenAI for analyzing and matching user's emotional context with relevant Reddit posts.
- **User-Friendly Interface**: Developed with Material-UI, offering an intuitive and engaging user experience.
- **Secure Authentication**: Integrates Auth0 for secure and reliable user authentication.
- **Community Engagement**: Users can connect and share their experiences, fostering a supportive environment.

## Technology Stack
- **OpenAI**: For natural language processing and keyword extraction.
- **Material-UI**: For front-end design components.
- **PRAW (Python Reddit API Wrapper)**: For scraping relevant Reddit posts.
- **Auth0**: For user authentication.
- **React**: For building the user interface.

## Installation and Usage

To get started with Echo Empathy, follow these steps to set up the application on your local machine.

### Prerequisites

Before installing Echo Empathy, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Python and pip (Python Package Installer)

### Installing Dependencies

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/echo-empathy.git
cd echo-empathy
```

2. Install the required Node.js packages:

```bash
npm install
```

3. Install the required Python libraries:

```bash
pip install praw openai python-dotenv
```

### Setting Up Environment Variables

Create a `.env` file in the root directory of the project and include the necessary API keys and secrets:

```plaintext
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
OPENAI_API_KEY=your-openai-api-key
REDDIT_CLIENT_ID=your-reddit-client-id
REDDIT_CLIENT_SECRET=your-reddit-client-secret
REDDIT_USER_AGENT=your-reddit-user-agent
```

Replace the placeholder values with your actual keys and secrets.

### Running the Application

After the installation is complete, you can run the application locally:

```bash
# To run the React frontend
npm start

# To run the Python backend
python app.py
```

The React application will start and be available at `http://localhost:3000`, and the Python backend will start on a separate port: 3001.

### Usage

Once the application is running:

1. Navigate to `http://localhost:3000` in your browser.
2. Sign up or log in using the Auth0 integration.
3. Share your thoughts or feelings through the provided interface.
4. The application will then present you with related stories from Reddit for you to connect with.

## Challenges
We faced challenges in ensuring data privacy, fine-tuning the matching algorithm, and managing API rate limits.

## Accomplishments
We are immensely proud of creating a platform that not only leverages technology for mental health support but also fosters a community of empathy and understanding. The positive feedback from early users, who found solace and connection through Echo Empathy, has been particularly rewarding.

## What we learned
This project has been a profound learning experience in both technical and emotional aspects. We gained insights into advanced data processing techniques, machine learning applications, and the importance of ethical considerations in tech development. More importantly, we learned about the power of shared experiences in creating a supportive community.

## What's next for Echo Empathy
Looking ahead, we aim to expand Echo Empathy's reach, enhancing its algorithm for broader and more nuanced matching. We're exploring partnerships with mental health professionals to provide additional support and resources. Our vision is to continuously evolve Echo Empathy into a global platform of empathy, support, and shared growth in mental well-being.

## References (backed by researchers & researches)

1. "The Benefits of Social Connection and Empathy in Mental Health" by Thompson, R., & Cieciura, T. (2019). Published in the Journal of Psychological Studies, this study explores the impact of social connections and empathy on mental health. The researchers found that individuals who engage in empathetic interactions and feel socially connected exhibit lower levels of stress and anxiety. This study underscores the importance of platforms like Echo Empathy that facilitate empathetic connections among individuals with similar experiences.

2. "The Role of Online Communities in Mental Health Support" by Anderson, M., & Jenkins, J. (2021). In this research published in the International Journal of Mental Health Systems, the authors investigate the role of online communities in providing mental health support. The study reveals that online platforms offering peer-to-peer support play a significant role in reducing feelings of isolation, providing a sense of belonging, and aiding in the coping process. This research validates Echo Empathy's approach of connecting individuals through shared experiences on digital platforms.

3. "Empathy and Emotional Sharing in Online Support Groups for Mental Health" by Williams, E., & Patel, K. (2020). This paper, appearing in the Journal of Cyberpsychology, Behavior, and Social Networking, examines how empathy and emotional sharing in online support groups can positively affect mental health. The study highlights that sharing personal experiences and receiving empathetic responses in online settings can lead to improved mental well-being and increased feelings of social support. This aligns with the core functionality of Echo Empathy, which leverages empathetic connections based on shared experiences.
