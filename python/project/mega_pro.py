# import speech_recognition as sr
# import webbrowser
# import pyttsx3
# import mysong
# from openai import OpenAI 
# import os

# recognizer = sr.Recognizer()
# engine = pyttsx3.init()

# def speak(text):
#     engine.say(text)
#     engine.runAndWait()
# def pc(c):
#     if (c.lower() == "open google"):
#         webbrowser.open("https://www.google.com/")
#     elif (c.lower() == "open youtube"):
#         webbrowser.open("https://www.youtube.com/")
#     elif (c.lower() == "open instagram"):
#         webbrowser.open("https://www.nstagram.com/")
#     elif (c.lower() == "open facebook"):
#         webbrowser.open("https://www.nstagram.com/")  
#     elif (c.lower() == "open mia khalifa"):
#         webbrowser.open("https://okxxx2.com/sites/mia-khalifa/")  
#     elif (c.lower() == "open ok"):
#         webbrowser.open("https://www.ok.xxx/")
#     elif (c.lower() == "open master"):
#         webbrowser.open("https://xhaccess.com/search/xhmaster+sex+video+xhamaster+sex+xhmaster+sex?quality=720p")   
#     elif (c.lower().startswith("play")):
#         msong = c.lower().split(" ")[1]
#         music=mysong.song[msong]
#         webbrowser.open(music)
#     else:
#         print("somthing: known")
             
# if __name__=="__main__":
#     speak("initialization of ai.......")
#     while True:
#         r = sr.Recognizer()
#         speak("now you can call ai")
#         try:
#             with sr.Microphone() as source:
#                 print("listening........")
#                 audio = r.listen(source)
#             word =r.recognize_google(audio)
#             # word =input("what is key : ")
#             if (word.lower() == "java"):
#                 speak("speak brother how can i help you")
#                 with sr.Microphone() as source:
#                      print("bol ne lodeee")
#                      audio = r.listen(source)
#                      command =r.recognize_google(audio)
#                     #  command =input("what you want :")      
#                      pc(command)
#         except Exception as e:
#             print("error; {0}".format(e))
#             break
    
import tkinter as tk
from tkinter import ttk
import speech_recognition as sr
import webbrowser
import pyttsx3
import mysong  # Make sure mysong.song is a dictionary

# Initialize recognizer and text-to-speech
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def pc(command):
    cmd = command.lower()
    if cmd == "open google":
        webbrowser.open("https://www.google.com/")
    elif cmd == "open youtube":
        webbrowser.open("https://www.youtube.com/")
    elif cmd == "open instagram":
        webbrowser.open("https://www.instagram.com/")
    elif cmd == "open facebook":
        webbrowser.open("https://www.facebook.com/")
    elif cmd.startswith("play "):
        song_key = cmd.replace("play ", "").strip()
        song_url = mysong.song.get(song_key)
        if song_url:
            webbrowser.open(song_url)
            speak(f"Playing {song_key}")
        else:
            speak(f"No song found for {song_key}")
            update_status(f"❌ Song not found: {song_key}")
    else:
        speak("Unknown command.")
        update_status("❓ Unknown command.")

def update_status(msg):
    status_label.config(text=msg)

def listen_for_commands():
    update_status("🎤 Listening for wake word...")
    speak("Say the wake word")
    try:
        with sr.Microphone() as source:
            audio = recognizer.listen(source)
        keyword = recognizer.recognize_google(audio)
        if keyword.lower() == "java":
            speak("Yes, I'm listening...")
            update_status("🔊 Listening for your command...")
            with sr.Microphone() as source:
                audio = recognizer.listen(source)
            command = recognizer.recognize_google(audio)
            pc(command)
        else:
            update_status("❌ Wake word not recognized.")
    except Exception as e:
        update_status(f"⚠️ Error: {str(e)}")

# Dark Theme GUI
root = tk.Tk()
root.title("Voice Assistant")
root.geometry("400x200")
root.configure(bg="#121212")

# Style
style = ttk.Style()
style.theme_use("clam")
style.configure("TLabel", background="#121212", foreground="white", font=("Segoe UI", 12))
style.configure("TButton", background="#1F1F1F", foreground="white", font=("Segoe UI", 12))

# Label
ttk.Label(root, text="🎙️ Voice Assistant", font=("Segoe UI", 16)).pack(pady=10)
status_label = ttk.Label(root, text="Status: Idle")
status_label.pack(pady=10)

# Button
ttk.Button(root, text="Start Listening", command=listen_for_commands).pack(pady=20)

# Launch
speak("Voice Assistant is ready.")
root.mainloop()

    
    
    