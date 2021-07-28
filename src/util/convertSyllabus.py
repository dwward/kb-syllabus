'''
    Utility to assist in converting CSV format of Kaiwan Syllabus to
    a technique list.  Expects CSV format in a particular format that
    requires the Excel spreadsheet to be altered according to
    example below.

    Example
    -------------
    THROWING TECHNIQUES (NAGE WAZA),,,,,,,,,,,,,,,,
    ,STANDING TECHNIQUES (TACHI WAZA),,,,,,,,,,,,,,,
    ,,HIP TECHNIQUES (KOSHI WAZA)  ,,,,,,,,,,,,,,
    "Kubi Nage (Neck Throw) [regular, aiki]",66,70,x,,x,,x,,x,,x,,x,,x,
    O Goshi (Major Hip Throw),,65,x,,x,,x,,x,,x,,x,,x,

    Given the lines of CSV above, the first three lines are interpreted
    as category and subcategories based on position in column 1, 2 or 3.  
    The last two lines are interepted as techniques and use various columns 
    to populate technique information as shown below:

    Technique name, Kirby '83 pages, Kirby '99 pages, Kodokan pages, Yellow technique,,Green technique,,Yellow-Green technique,,Purple technique,,Brown3 technique,,Brown2 technique,,Brown3 technique,

'''

from csv import reader
import json

def isCategory(row):
    if not row[15]:
        return True
    return False

def beltTest(row):
    if row[3]:
        return "Yellow"
    if row[5]:
        return "Green"
    if row[7]:
        return "Green Yellow"
    if row[9]:
        return "Purple"
    if row[11]:
        return "Brown 3"
    if row[13]:
        return "Brown 2"
    if row[15]:
        return "Brown 1"
    raise ("Can't find belt test")

def getKirby83Pages(row):
    col = row[1]
    if not col:
        return ''    
    toks = col.split('[')

    #  1 or 1[2] or [2]

    if len(toks) == 1:
        return toks[0].strip()
    else:
        if toks[0]:
            return toks[0].strip()    
    return ''

def getKirby99Pages(row):
    col = row[1]
    if not col:
        return ''    
    toks = col.split('[')

    #  1 or 1[2] or [2]

    if len(toks) == 2:
        return (toks[1])[:-1].strip()
    return ''

def getKodokan97Pages(row):
    if row[2]:
        return row[2]
    return ''

with open('Jujitsu-Syllabus-201701.csv', 'r') as read_obj:
    csv_reader = reader(read_obj)

    category1=''
    category2=''
    category3=''
    techniques = []
    books = []

    for row in csv_reader:        
        #Retrieve category
        if isCategory(row):    
            if row[0]:
                category1 = row[0]
                category2 = ''
                category3 = ''
            if row[1]:
                category2 = row[1]
            if row[2]:
                category3 = row[2]
        else:
            if not isCategory(row):
                 #Build technique JSON
                t = {}

                # technique name
                t['name'] = row[0].strip()

                # categories
                categories = []
                if category1:
                    categories.append(category1.strip().title())
                if category2:
                    categories.append(category2.strip().title())
                if category3:
                    categories.append(category3.strip().title())
                t['categories'] = categories

                # belt tested
                t['belt'] = beltTest(row)

                # placeholder for video
                t['video'] = ''

                # placeholder for description
                t['description'] = ''

                # book pages
                t['pages_kirby83'] = getKirby83Pages(row)
                t['pages_kirby99'] = getKirby99Pages(row)
                t['pages_kodokan97'] = getKodokan97Pages(row)                

                # add technique to list
                techniques.append(t)

    print(json.dumps(techniques, indent=4))


            