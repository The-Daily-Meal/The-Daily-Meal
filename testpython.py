import re

def searchmentions(document):
    with open(document, 'r', encoding="utf-8") as f:
        contents= f.read()
        mentions = re.findall('class="mention [^>]*>', contents)
        my_dict={}
        listofmentions=[]
        listofabout=[]
        added=False
        for mention in mentions:
            mention = mention.split('" about=')
            ment = re.sub('class="mention ', '',mention[0])
            listofmentions.append(ment.split())
            mentt=ment.split()
            about= re.sub('"', '', mention[1])
            about= re.sub(' id=.*', '', about)

            if ment not in my_dict:
                my_dict[ment]=[{about:1}]
            else:
                for el in my_dict[ment]:
                    if about in el:
                        el[about]+=1
                        added=True
                if not added:
                    my_dict[ment].append({about:1})
            added=False

        print("FOR EACH CATEGORY: ALL THE 'ABOUT'S AND THE NUM OF TIMES THEY APPEAR")
        for key, el in sorted(my_dict.items()):
            print(key, el)

        dictformentions={}
        for el in listofmentions:
            for element in el:
                if element not in dictformentions:
                    dictformentions[element]=1
                else:
                    dictformentions[element]+=1
        print("")
        print('NUMBER OF MENTIONS FOR EACH CATEGORY')
        for key, el in sorted(dictformentions.items()):
            print(key, el)

        print(my_dict['food ingredient'])

if __name__ == '__main__':
    searchmentions("art1icecream.txt");
