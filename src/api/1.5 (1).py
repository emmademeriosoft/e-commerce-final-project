username="junaid"
password="pakistan"

inpuser=input("Enter UserName: ")
inppass=input("Enter Password: ")

if inpuser == username:
    if inppass == password:
        print("Welcome")
    else:
        print("Incorrect Password")
else:
    print("Incorrect UserName")