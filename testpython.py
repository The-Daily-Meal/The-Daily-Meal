import re

def searchmentions(document):
    with open(document, 'r', encoding='utf-8') as f:
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
        for key, el in sorted(my_dict.items()):
            print(key, el)

if __name__ == '__main__':
    searchmentions("art1icecream.txt");
