let cl=console.log;

companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
]

//1 ["Company One (1981 - 2003)", "Company Two (1992 - 2008)"]
let result =companies.map((params)=>{
    return `${params.name} (${params.start}-${params.end})`
})
cl(result);

//2 ["Company One - 22", "Company Two - 16"]
let result1 =companies.map((par2)=>{
    return `${par2.name} - ${par2.end-par2.start}`
})
cl(result1)

//3 ['Company One - Finance', 'Company Two - Retail'...]
let result2=companies.map((par3)=>{
    return `${par3.name} - ${par3.category}`
})
cl(result2)
//4 [
// {compName : "Company One"},
// {compName : "Company Two"},
// {compName : "Company Three"},
// ]
let result3 =companies.map((par4)=>{
    return {
        compname :par4.name
    }
})
cl(result3)


//5  [{compName : "Compnay One", lifeSpan : '1981 - 2003'}]
let result4=companies.map((par5)=>{
    return {
        compName : par5.name,
        lifeSpan :`${par5.start} - ${par5.end}`
    }
})
cl(result4)

// 6 [{compName : "Company One", duration : 22}]
let result5=companies.map((par6)=>{
    return {
      compName :par6.name,
      duration :`${par6.end-par6.start}`  
    }
});
cl(result5);

// 7 [{compName : "Company One", catg : "Finance"}]
let result6=companies.map((par7)=>{
    return {
      compName :par7.name,
      category :par7.category  
    }
})
cl(result6);


// #### **1. List all company names**

// `["Company One", "Company Two", "Company Three", ..., "Company Nine"]`
let result7=companies.map((par8)=>{
    return par8.name
})

// ---

// #### **2. Company names with category**

// `["Company One - Finance", "Company Two - Retail", ..., "Company Nine - Retail"]`
let result8=companies.map((par9)=>{
    return `${par9.name}-${par9.category}`
})
cl(result8)
// ---

// #### **3. Company duration in years**

// `[22, 16, 8, 21, 5, 23, 10, 5, 8]`
let result9=companies.map((par10)=>{
    return {
        duration :`${par10.end-par10.start}`
    }
})
cl(result9)
// ---

// #### **4. Company names in uppercase**

// `["COMPANY ONE", "COMPANY TWO", ..., "COMPANY NINE"]`

let result10=companies.map((par11)=>{
    return  par11.name.toUpperCase();
})
cl(result10)

// #### **5. Company start years only**

// `[1981, 1992, 1999, 1989, 2009, 1987, 1986, 2011, 1981]`

let result11=companies.map((par12)=>{
    return `Company start years ${par12.start}`
})
cl(result11)
// #### **6. Company end years only**

// `[2003, 2008, 2007, 2010, 2014, 2010, 1996, 2016, 1989]`

let result12=companies.map((par13)=>{
    return `Company end years ${par13.end}`
})
cl(result12)
// #### **7. Company names with their duration formatted**

// `["Company One (22 years)", "Company Two (16 years)", ..., "Company Nine (8 years)"]`
let result13=companies.map((par14)=>{
    return `${par14.name} (${par14.end-par14.start} years)`
})
cl(result13);
// #### **8. Category only list**

// `["Finance", "Retail", "Auto", "Retail", "Technology", "Finance", "Auto", "Technology", "Retail"]`

let result14=companies.map((par15)=>{
    return par15.category
})
cl(result14)
// #### **9. Company names with start and end year range**

// `["Company One (1981 - 2003)", ..., "Company Nine (1981 - 1989)"]`
let result15=companies.map((par16)=>{
    return `${par16.name} (${par16.start} -${par16.end})`
})
cl(result15)

// #### **10. Company details in object with name and years worked**


// ```js
// [
//   { name: "Company One", years: 22 },
//   { name: "Company Two", years: 16 },
//   ...
// ]
// ```

let result16=companies.map((par17)=>{
    return {
        compName :-par17.name,
        years :-`${par17.end-par17.start}`
    }
})
cl(result16);
// #### **11. Company name with starting decade**

// `["Company One - 1980s", "Company Two - 1990s", ..., "Company Nine - 1980s"]`

let result17=companies.map((par18)=>{
let red =Math.floor(par18.start/10)*10
return `${par18.name}-${red}`
})
cl(result17)

// #### **12. Category wise label for companies**

// `["Finance Company", "Retail Company", "Auto Company", ..., "Retail Company"]`

let result18=companies.map((par19)=>{
    return `${par19.category} Company`
})
cl(result18);

// #### **13. Name and category together in object**


// ```js
// [
//   { company: "Company One", category: "Finance" },
//   ...
// ]
let result19 = companies.map((par20) => {
    return {
        company: par20.name,
        category: par20.category
    };
});

cl(result19);
// ---

// #### **14. Company names with initials only**

// `["CO", "CT", "CT", "CR", "CT", "CF", "CA", "CT", "CR"]`

let result20=companies.map((par21)=>{
    return par21.name.split(" ").map((word)=>word[0]).join(" ")
})
cl(result20)

// #### **15. Add 'Ltd.' to every company name**

// `["Company One Ltd.", "Company Two Ltd.", ..., "Company Nine Ltd."]`

let result21=companies.map((par22)=>{
    return `${par22.name} Ltd.`
})
cl(result21)

// #### **16. Create unique ID for each company**

// `["Company One-1981", "Company Two-1992", ..., "Company Nine-1981"]`

let result22=companies.map((par23)=>{
    return `${par23.name}-${par23.start}`
})
cl(result22)

// #### **17. Boolean array: Was company active after 2000?**

// `[true, true, true, true, true, true, false, true, false]`

let result23=companies.map((par24)=>{
    return par24.end >2000
})
cl(result23)
// #### **18. Company name with their start age (Assume current year = 2025)**

// `["Company One - 44 years old", ..., "Company Nine - 44 years old"]`

let result24=companies.map((par25)=>{
    return `${par25.name}-${2025-par25.start} years old`
})
cl(result24)

// #### **19. Format all companies as CSV row**

// `["Company One,Finance,1981,2003", ..., "Company Nine,Retail,1981,1989"]`

let result25=companies.map((par26)=>{
    return `${par26.name},${par26.category},${par26.start},${par26.end}`
})
cl(result25)

// #### **20. Convert company objects into stringified JSONs**


// ```js
// [
//   '{"name":"Company One","category":"Finance","start":1981,"end":2003}',
//   ...
// ]
let result26=companies.map((par27)=>{
    return {
        compName :par27.name,
        category :par27.category,
        start :par27.start,
        end :par27.end
    }
})
cl(result26)

// ---

// #### **21. Years active as string range**

// `["1981 to 2003", "1992 to 2008", ..., "1981 to 1989"]`

let result27=companies.map((par28)=>{
    return `${par28.start} to ${par28.end}`
})
cl(result27);

// #### **22. All lowercase company names**

// `["company one", "company two", ..., "company nine"]`

let result28=companies.map((par30)=>{
    return par30.name.toLowerCase()
})
cl(result28)

// #### **23. Company names with their index**

// `["0: Company One", "1: Company Two", ..., "8: Company Nine"]`

let result29 = companies.map((par31, index) => {
    return `${index}: ${par31.name}`;
});

cl(result29);

// #### **24. First letters of all company names**

// `["C", "C", "C", "C", "C", "C", "C", "C", "C"]`

let result30=companies.map((par32)=>{
    return par32.name.charAt(0)
})
cl(result30)

// #### **25. Length of each company name string**

// `[12, 12, 14, 14, 14, 13, 14, 14, 14]`
let result31=companies.map((par33)=>{
    return par33.name.length;
})
cl(result31)


// #### **26. Extract last word from each company name**

// `["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]`

let result32=companies.map((par34)=>{
    return par34.name.split(" ")[1]
})
cl(result32)

// #### **27. Company name with total digits in start+end**

// `["Company One - 8 digits", ..., "Company Nine - 8 digits"]`

let result33 = companies.map((par35) => {
    return `${par35.name} - ${(par35.start.toString() + par35.end.toString()).length} digits`;
});

cl(result33);

// #### **28. Total characters in company name + category**

// `[24, 23, 23, 24, 26, 24, 23, 26, 24]`
// *(e.g., "Company OneFinance" = 12 + 7 = 19)*

let result34 = companies.map((par36) => {
    return par36.name.length + par36.category.length;
});

cl(result34);

// #### **29. Reverse of company name**

// `["enO ynapmoC", "owT ynapmoC", ..., "eniN ynapmoC"]`

let result35=companies.map((par37)=>{
     return par37.name.split("").reverse().join("");
})
cl(result35)



// #### **30. First 3 letters of category (abbreviation)**

// `["Fin", "Ret", "Aut", "Ret", "Tec", "Fin", "Aut", "Tec", "Ret"]`

let result36=companies.map((par38)=>{
    return par38.category.slice('0','3')
})
cl(result36)
