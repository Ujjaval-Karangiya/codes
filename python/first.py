"""spekimg program"""

# import pyttsx3
# engine = pyttsx3.init()
# a = input("Enter your text to play :")
# engine.say(a)
# engine.runAndWait()

"""string""" 

# name = "hello i am ujjaval"
# print(name[2:4])
# print(len(name))
# print(name.endswith("aval"))
# print(name.startswith("ujj"))
# print(name.capitalize())
# print(name.find("i"))
# print(name.replace("ujjaval", "Ujjaval"))
 
"""lists"""
#it is mutable function


# friends = ["pratik","bhargav","mohit","sagar","rahul","kishan"]
# print(friends[0]) 
# print(friends[0:4]) 
# friends.append("hardik")
# print(friends)
# friends.sort()
# print(friends)
# friends.reverse()
# print(friends)
# friends.insert(0, "hem")
# print(friends)
# print(friends.pop(1))
# friends.remove("hem") 

"""tuples"""
#it is emmutable function

# a=(1,14,9,24,False,24,"pratik","bhargav","moh")
# print(type(a))
# print(a)
# print(a.count(24))
# ind=a.index(24)
# print(ind)
# print(24 in a)
# print(len(a))

"""sets"""

# s={1,2,50,5,5,5,"ujjaval",3,4,5,6}
# u={2,3,4,"ujjaval",5,50}
# e=set() #to create a empty
# print(s,type(s))
# print(len(s))
# print(s.remove(1))
# print(s.union(u))
# print(s.intersection(u))
# print({"ujjaval"}.issubset(u))

"""function & recurtion"""

"""fectore"""
# def recurtion(n):
#     if n == 0 or n == 1:
#         return 1
#     return n*recurtion(n-1)

# u = int(input("Number"))
# print(recurtion(u))   

"""f to c """
# def f_to_c(f):
#     return 5*(f-32)/9

# f = int (input("enter your ferenheat :"))
# print(round(f_to_c(f),2))

"""sum of natural numbers"""
# def sum_natural(num):
#     if num==1:
#         return 1
#     return sum_natural(num-1)+num
# num = int(input("enter your natural number :"))
# print(f"sum of natural numbers is : {sum_natural(num)}")

""" file reading """

# f = open ("file.txt", "r")
# data=f.read()
# print(data)
# f.close()

# st="hello"
# f = open ("fmy.txt", "w")
# f.write(st)
# f.close()

# f=open ("file.txt")
# lines= f.readlines()
# print(lines , type(lines))
# f.close()

# f=open ("file.txt")
# lines1= f.readline()
# print(lines1 , type(lines1))

# lines2= f.readline()
# print(lines2 , type(lines2))


# f.close()

# f= open ("file.txt")
# line = f.readline()
# while (line != ""):
#     print(line.strip())
#     line = f.readline()

# f.close()


# st="hello"
# f = open ("file.txt", "a")
# f.write(st)
# f.close()

"""with statements"""

# with open("file.txt") as f:
#     data = f.read()
#     print(data)

"""find word"""

# f = open("file.txt")
# c=f.read()
# if ("ujjaval" in c):
#     print("found")
#     print(f.readline())
# else:
#     print("not found")

# f.close()

"""train schedule"""
# import random
    
# class train :

#     def ragister(self,rnum):
#         print(f"your registaion number is {rnum} ")
    
#     def status(self,rnum,st,ed):
#         print(f"train {st} to {ed} is on time ,your registation number is {rnum}")
    
# st=input("Enter your starting point :")
# ed=input("Enter your ending point :")
# rnum=random.randint(0,32164896)      
# u = train()
# u.ragister(rnum)
# u.status(rnum,st,ed)

"""lambda"""
# u = int(input("your number :"))
# a=lambda x:x*x
# print(a(u))

"""join"""

# arr=["ujjaval","yash"]
# print(" brother of ".join(arr))

"""formate"""

# u="{} brother of {}".format("ujjaval","yash")
# print(u)

"""map,filter,reduse"""
"""map"""
from functools import reduce
numbers = [1, 2, 3, 4, 5]
u = lambda x:x*x
s=map(u,numbers)
print(list(s))

"""filter"""
def even(n):
    if n%2 == 0:
        return True
    return False
onlyeven=filter(even,numbers)
print(list(onlyeven))

"""reduce"""
def re(a,b):
    return a+b
s=reduce(re,numbers)
print(s)
