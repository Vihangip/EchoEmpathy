from openai import OpenAI
from dotenv import load_dotenv
import os
import sys

load_dotenv()  # Load environment variables from .env file

gpt_key = os.getenv('GPT_API_KEY')

client = OpenAI(api_key = gpt_key)

userInput = sys.argv[1]

def extract_keywords(userInput):
    response = client.chat.completions.create(model = "gpt-3.5-turbo",
    messages = [{"role": "system", "content": "You are an assistant who gives some five keywords to help me search a text in a database in the following format: word1, word2"},{"role": "user", "content": f"This is the text:\n\n{userInput}"}])
    print(response.choices[0].message.content)

extract_keywords(userInput);