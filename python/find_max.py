import random

def game():
    count=0
    highscore=0
    number=random.randint(1,100)
   
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100. and you have to guess")
   
    while True:
        guess=int(input("Guess the number : "))
        count+=1
        if guess==number:
            print("Congratulations, you won!")
            name = input("enter your name :")
            with open("fmy.txt","a") as f:
                 f.write(f"{name} : {count}\n")
        elif guess<number:
            print("Too low!")
        else:
            print("Too high!")
game()