//FORMAT OF QUESTION

// {  
//     type: 'MCQ',
//     que: `Q: Which state launch a project that aims to provide free internet 
//            access to the poor in the State?`,
//     opt: [
//         'Sikkim', 
//         'Kerala',
//         'Karnataka',
//         'Assam'
//     ],
//     ans: [2]
// }



const question = 
[
    //QUESTION OF HTML
    {  
        type: 'MCQ',
        que: `
        Q: What does HTML stands for?
            `,
        opt: [
            `Hightext machine language`, 
            `Hypertext and links markup language.`,
            `Hypertext Markup Language`,
            `Hypertext Machine language`
        ],
        ans: ["3"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: Which of the following is the correct way of creating an hyperlink in HTML?
            `,
        opt: [
            `&lt;a&gt;https://www.google.com &lt;Google /a&gt;`, 
            `&lta href=&#8220;https://www.google.com&#8221;&gt; Google &lt;/a&gt;`,
            `&lta&gt; &lt;href= &#8220;https://www.google.com&#8221;&gt;Google&lt;/a&gt;`,
            `&lt;a link=&#8220;https://www.google.com&#8221; Google&gt; &lt;/a&gt;`
        ],
        ans: ["2"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: Choose the correct HTML element for the largest heading:
            `,
        opt: [
            `&lt;h6&gt;`, 
            `&lt;heading&gt;`,
            `&lt;head&gt;`,
            `&lt;h1&gt;`
        ],
        ans: ["4"]
    },



    //QUESTION OF CSS
    {  
        type: 'MCQ',
        que: `
        Q: Which is the correct CSS syntax?
            `,
        opt: [
            `body: color=black;`, 
            `{ body: color=black; }`,
            `{ body; color: black; }`,
            `body { color: black; }`
        ],
        ans: ["4"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: How do you add a background color for all &lt;h1&gt; elements?
            `,
        opt: [
            `h1.all {background-color: #FFFFFF; }`, 
            `h1 {background-color: #FFFFFF; }`,
            `all.h1 {background-color: #FFFFFF; }`,
            `all#h1 {background-color: #FFFFFF; }`
        ],
        ans: ["2"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: How do you select elements with class name 'test' and id 'demo'?
            `,
        opt: [
            `.test , #demo`, 
            `#test , #demo`,
            `#test , .demo`,
            `.test , .demo`
        ],
        ans: ["1"]
    },
    
    
    
    //QUESTION OF JAVASCRIPT
    {  
        type: 'MCQ',
        que: `
        Q: What is the HTML tag under which one can write the JavaScript code?
            `,
        opt: [
            `&lt;javascript&gt;`, 
            `&lt;script&gt;`,
            `&lt;scripted&gt;`,
            `&lt;js&gt;`
        ],
        ans: ["2"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: What is the correct syntax to access the element:
            <span>
            &lt;p id="google"&gt;Google&lt;/p&gt;
            </span>
            `,
        opt: [
            `document.getElement(&#8220;google&#8221;)`, 
            `document.getElementById(&#8220;google&#8221;)`,
            `document.getElementsById(&#8220;google&#8221;)`,
            `document.getId(&#8220;google&#8221;)`
        ],
        ans: ["2"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: Predict the output of the following JavaScript code:
            <span>
                &lt;script type="text/javascript"&gt; 
                    <br>&nbsp;&nbsp;a = 8 + "8"; 
                    <br>&nbsp;&nbsp;document.write(a); 
                    <br>
                &lt;/script&gt; 
            </span>
            `,
        opt: [
            `16`, 
            `8 + "8"`,
            `88`,
            `a = 8 + "8"`
        ],
        ans: ["3"]
    },
    {  
        type: 'MCQ',
        que: `
        Q: Predict the output of the following JavaScript code:
            <span>
                &lt;script type="text/javascript"&gt; 
                    <br>&nbsp;&nbsp;var x=5; 
                    <br>&nbsp;&nbsp;var y="6"; 
                    <br>&nbsp;&nbsp;var res=eval("x*y"); 
                    <br>&nbsp;&nbsp;document.write(res); 
                    <br>
                &lt;/script&gt; 
            </span>
            `,
        opt: [
            `30`, 
            `"30"`,
            `5*6`,
            `NaN`
        ],
        ans: ["1"]
    },



    //MSQ TYPE QUESTION
    {  
        type: 'MSQ',
        que: `
        Q: Which of the following(s) is(are) correct about features of JavaScript?
            `,
        opt: [
            `JavaScript is a lightweight, interpreted programming language.`, 
            `JavaScript is designed for creating network-centric applications.`,
            `There is no difference between Javascript and Java.`,
            `All of the above`
        ],
        ans: ["1","2"]
    },
    {  
        type: 'MSQ',
        que: `
        Q: Which of the following(s) is(are) true about variable naming conventions in JavaScript?
            `,
        opt: [
            `You should use any of the JavaScript reserved keyword as variable name.`, 
            `You should not use any of the JavaScript reserved keyword as variable name.`, 
            `JavaScript variable names should  start with a numerical (0-9).`,
            `JavaScript variable names should not start with a numerical (0-9).`
        ],
        ans: ["2","4"]
    },
    {  
        type: 'MSQ',
        que: `
        Q: Which of the following(s) is(are) true about define a array in JavaScript?
            `,
        opt: [
            `new Array(1, "two", 3, "four");`, 
            `[1, "two", 3, "four"];`, 
            `var numericArray = new Array(3);<br>
                numericArray[0] = 1;<br>
                numericArray[1] = 2;<br>
                numericArray[2] = 3;`,
            `var stringArray = new Array();<br>
                stringArray[0] = "one";<br>
                stringArray[1] = "two";<br>
                stringArray[2] = "three";<br>
                stringArray[3] = "four";`
        ],
        ans: ["1","2","3","4"]
    },
    {  
        type: 'MSQ',
        que: `
            <span>
            var obj = { <br>
                &nbsp;&nbsp;0: 1, <br>
                &nbsp;&nbsp;1: 2, <br>
                &nbsp;&nbsp;'cat': 'meaow',  <br>
                &nbsp;&nbsp;'': 'empty string'<br>
                };
                <br><br>
                console.log(obj[0], obj[1], obj['cat'], obj['']);  <em style="color:gray">/* Suppose this is A */</em>
                <br><br>
                console.log(obj[0], obj[''], obj['cat'], obj[1]);  <em style="color:gray">/* Suppose this is B */</em>
            </span>
            Q: Choose the correct option(s) 
            `,
        opt: [
            `A: 1 2 meaow empty string <br>
             B: 2 empty string meaow 1
            `, 

            `A: 2 1 meaow empty string <br>
             B: 1 empty string meaow 2
            `, 

            `A: 1 2 meaow empty string <br>
             B: 1 empty string meaow 2
            `,

            `A: 1 2 empty string meaow<br>
             B: 2 1 empty string meaow
            `
        ],
        ans: ["3"]
    },
    {  
        type: 'MSQ',
        que: `
            <span>
                var arr = [1, 2, 3, 4];<br>
                console.log(arr.length); <em style="color:gray">/* Suppose this is A */</em><br><br>
                arr[20] = 5; <br>
                console.log(arr.length); <em style="color:gray">/* Suppose this is B */</em>
            </span>
            Q: Choose the correct option(s)
            `,
        opt: [
            `A: 4 `, 
            `B: 4`, 
            `A: 21`,
            `B: 21`
        ],
        ans: ["1","4"]
    }
];



