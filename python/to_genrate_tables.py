def generate(n):
    table=""
    for i in range(1,11):
        table+=f"{n} x{i}  = {i*n}\n"
    
    with open(f"tables/table_{n}","w") as f :
        f.write(table)

y = int(input("Enter your forst table no."))
x=int(input("Enter your last table no."))
for i in range(y,x+1):
    generate(i)
    