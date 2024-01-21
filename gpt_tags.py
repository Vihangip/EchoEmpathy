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
    messages = [{"role": "user", "content": f"Focusing on the main emotional and situational elements of the situation, rephrase everything in one line.:\n\n{userInput}"}])
    print(response.choices[0].message.content)

extract_keywords(userInput);
#extract_keywords("My dad passed away recently, and I am feeling like shit right now. I have lost all purpose in life. I don’t see a future for myself. It is very tiring because I have to comfort my siblings while pretending to be strong, but I am at the weakest point in my life right now. I have suicidal thoughts everyday, but I choose to keep going because my dad would want me too. He was the light of my life, and I miss him everyday. I feel so lost and alone. ")