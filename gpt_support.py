from openai import OpenAI

client = OpenAI(api_key="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")
import json
import os

def extract_keywords(paragraph):
    response = client.chat.completions.create(model = "gpt-3.5-turbo",
    messages = [{"role": "user", "content": f"What kind of support or help is needed?, one short line answer):\n\n{paragraph}"}])
    return response

paragraph = "I live with my father and have a very strained relationship with my sister (who is now married).I struggle everyday. I don't want to be alive anymore. I've attempted suicide 3 times and am thinking of just getting a knife slicing my throat. I do not want to be around people or anyone. I get no enjoyment out of work, socalising, anything. The only time I do enjoy is my time alone. I do not have friends, or a partner. I don't know what to do anymore."

keywords = extract_keywords(paragraph)
print(keywords.choices[0].message.content)
