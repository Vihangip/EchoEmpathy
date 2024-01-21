import praw
import json
import os
import sys


from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

client_id = os.getenv('REDDIT_ID')
client_secret = os.getenv('REDDIT_SECRET')
user_agent = os.getenv('REDDIT_USER_AGENT')

keywords = sys.argv[1]

def search_reddit_posts(keywords):
    
    # Initialize PRAW with your credentials
    reddit = praw.Reddit(client_id=client_id,
                         client_secret=client_secret,
                         user_agent=user_agent)

    # List to store post data
    posts_data = []

    # Searching for the top 3 posts with the given keywords
    for submission in reddit.subreddit("all").search(keywords, sort='relevance', time_filter='all', limit=3):
        post_info = {
            "title": submission.title,
            "body": submission.selftext,
            "url": submission.url,
            "user-name": str(submission.author),
            "profile-pic": "https://www.redditinc.com/assets/images/galleries/snoo-small.png",  # Placeholder for profile picture
            "profile-url": "https://www.reddit.com/user/" + str(submission.author)
        }
        posts_data.append(post_info)

    # Creating JSON object
    post_data = json.dumps({"posts": posts_data}, indent=2)
    print(post_data)

search_reddit_posts(keywords);