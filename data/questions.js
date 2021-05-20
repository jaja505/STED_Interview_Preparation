const JAVA = [
    {
        q:
            "What is the difference between Default AccessMod and Protected AccessMod?",
        s: "",
        t: 2,
    },
    {
        q: "What are the differences between a Constructor and a Method?",
        s: "Constructor doesn’t have a return type and constructor’s name must be same as the class name.\n" +
            "o Constructor is called automatically when a new object is created. Constructor is invoked implicitly.\n" +
            "o The Java compiler provides a default constructor if we don’t have any constructor.\n" +
            "o Constructors are not inherited by child classes\n" +
            "• Method have a return and the method’s name may or not be same as the class name\n" +
            "o Method is invoked explicitly.\n" +
            "o Method is not provided by compiler in any case.\n" +
            "o Methods are inherited by child classes.",
        t: 2,
    },
    {
        q: "What are the differences between Arrays and ArrayList in Java?",
        s: "• Major difference is that; Array is a fixed length data structure, so we can change length of Array one created, ArrayList is\n" +
            "resizable.\n" +
            "• The other major one is that Array can contain both primitives and objects. ArrayList can only contain objects. It cannot\n" +
            "contain primitive types.",
        t: 2,
    },
    {
        q: "Can you explain how to reverse a String? (technical question)",
        s: "public static String StrReverse(String str) {\n" +
            "\n" +
            "String reverse=\"\";\n" +
            "\n" +
            "for(int i=str.length()-1; i >= 0; i--)\n" +
            "\n" +
            "reverse += str.toCharArray()[i];\n" +
            "return  reverse;\n" +
            "}",
        t: 2,
    },
    {
        q: "Can you explain how to Concat two arrays? (technical question)",
        s: "",
        t: 2,
    },
    {
        q:
            "Can you explain how to create a custom method that returns odd numbers? (technical question)",
        s: "",
        t: 2,
    },
    {
        q: "Can you explain the different types of Access Modifiers?",
        s: "",
        t: 3,
    },
    {
        q: "What does OOP stands for?",
        s: "Object oriented programming",
        t: 2,
    },
    {
        q: "What are the 4 principles of OOP?",
        s: "Encapsulation, Inheritance, Abstraction, Polymorphism",
        t: 2,
    },
    {
        q: "What is the concept of Encapsulation?",
        s:
            "This is one of the concepts of OOP and it allows us to hide the name of the variable. We set the variables we want hidden to have a private AccessMod and then create getter() and setter() methods to set and retrieve the values of those private variables....but it doesnt mean we reveal what the variables actually stand for.",
        t: 2,
    },
    {
        q: "What is the concept of Inheritance?",
        s:
            'Inheritance is one of the concepts of OOP and it is a "relationship" between classes. When a class inherits another class it is saying it has an "IS A" relationship with that class(Superclass to Subclass / Parent to Child). It is the fastest way to make a class rich. If you want to invoke the methods or variables of the SuperClass then you have to use the keyword |super.| or |super()| as opposed to |this.| or |this()|. Syntax: public class Honda extends Car{.',
        t: 2,
    },
    {
        q:
            "What is the difference between Default AccessMod and Protected AccessMod?",
        s:
            "Protected can be visible in subClasses and anywhere in the package. Default can only be visible in the same package and NOT in subclasses.",
        t: 1,
    },
    {
        q: "What are the differences between a Constructor and a Method?",
        s: "Constructor doesn’t have a return type and constructor’s name must be same as the class name.\n" +
            "o Constructor is called automatically when a new object is created. Constructor is invoked implicitly.\n" +
            "o The Java compiler provides a default constructor if we don’t have any constructor.\n" +
            "o Constructors are not inherited by child classes\n" +
            "• Method have a return and the method’s name may or not be same as the class name\n" +
            "o Method is invoked explicitly.\n" +
            "o Method is not provided by compiler in any case.\n" +
            "o Methods are inherited by child classes.",
        t: 2,
    },
    {
        q: "What are the differences between Arrays and ArrayList in Java?",
        s: "",
        t: 2,
    },
    {
        q: "Can you explain how to reverse a String? (technical question)",
        s: "public static String StrReverse(String str) {\n" +
            "\n" +
            "String reverse=\"\";\n" +
            "\n" +
            "for(int i=str.length()-1; i >= 0; i--)\n" +
            "\n" +
            "reverse += str.toCharArray()[i];\n" +
            "return  reverse;\n" +
            "}",
        t: 2,
    },
    {
        q: "Can you explain how to Concat two arrays? (technical question)",
        s: "",
        t: 2,
    },
    {
        q:
            "Can you explain how to create a custom method that returns odd numbers? (technical question)",
        s: "",
        t: 2,
    },
    {
        q: "Can you explain the different types of Access Modifiers?",
        s:
            "Public(Global/Project Visibility), Protected(Package and Subclass Visibility), Default(Package Visibility), Private(Class Visibility)",
        t: 2,
    },
    {
        q: "What are the differences between a Constructor and a Method?",
        s:
            "Constructor is used to initialize an object whereas method is used to exhibits functionality of an object. Constructors are invoked implicitly whereas methods are invoked explicitly. Constructor does not return any value where the method may/may not return a value. In case constructor is not present, a default constructor is provided by java compiler. In the case of a method, no default method is provided. Constructor should be of the same name as that of class. Method name should not be of the same name as that of class.",
        t: 2,
    },
    {
        q: "What are the differences between Arrays and ArrayList in Java?",
        s:
            "An array is basic functionality provided by Java. ArrayList is part of collection framework in Java. Therefore array members are accessed using [], while ArrayList has a set of methods to access elements and modify them. ArrayList size is dynamic, while Array size is fixed.",
        t: 2,
    },
    {
        q: "What is the difference between checked and unchecked Exception?",
        s: "Main difference between RuntimeException and checked Exception is that, It is mandatory to provide try catch or try finally\n" +
            "block to handle checked Exception and failure to do so will result in compile time error, while in case of RuntimeException this\n" +
            "is not mandatory",
        t: 2,
    },
    {
        q: "Mention 4 exceptions in Java and how to handle them",
        s:
            "NullPointerException, ArrayIndexOutOfBoundsException, ClassCastException, llegalArgumentException, IllegalStateException.",
        t: 5,
    },
    {
        q: "What is an Exception and exception handling?",
        s:
            "Exceptions are events due to which java program ends abruptly without giving expected output. Java provides a framework where a user can handle exceptions. The process of handling Exceptions is called Exception Handling. Exceptions need to be handled because they break the normal flow of execution of a program. One of the important intentions of exception handling is to prevent this break and continue program execution. Sometimes, you might want to perform some series of actions on occurring of a certain exception.",
        t: 3,
    },
    {
        q: "Mention the class hierarchy of exception and error.",
        s:
            "#1) Checked Exception: Checked exception is handled during compile time and it gives the compilation error if it is not caught and handled during compile time.\n#2) Unchecked Exception: In case of the unchecked exception, a compiler does not mandate to handle. The compiler ignores during compile time.\n#3) Error: When a scenario is fatal and the program cannot recover then JVM throws an error. Errors cannot be handled by the try-catch block. Even if the user tries to handle the error by using Try catch block, it cannot recover from the error.",
        t: 3,
    },
    {
        q: "How do you handle an exception?",
        s:
            "Try and Catch block: try-catch blocks are generally used to handle exceptions. Type of exceptions is declared in catch block which is expected to come. When an exception comes in try block, immediately control moves to catch block.\nthrows Exception: throws keyword in java is used to throw an exception rather than handling it. All checked exceptions can be thrown by methods.\nfinally block: finally, block executes irrespective of execution of try-catch block and it executes immediately after try/catch block completes.\nThrowable: Throwable is a parent class for error and exception. Generally, it is difficult to handle errors in java. If a programmer is not sure about the type of error and exception, then it is advised to use the Throwable class which can catch both error and exception.",
        t: 2,
    },
    {
        q: "What is 508 testing?",
        s: "It’s a requirement for government websites.\n" +
            "• All the websites that are used by and for the government. They have to make sure disabled people can use it.\n" +
            "• Example: For healthcare.gov they have Compliance manager and he has a dedicated QA team that does 508 Compliance\n" +
            "testing to make sure the website is 508 compliant for disability users.\n"
        ,
        t: 2,
    },
    {
        q:
            "What is the abstract concept in OOP and why do we use it? Give one example please",
        s:
            "Abstract classes help us organize what all the subclasses SHOULD have/do",
        t: 2,
    },
    {
        q:
            "What is the difference between Interface and Abstraction? How are each created? What methods cannot be abstract/interfaced?",
        s: "A class that is declared with abstract keyword, is known as abstract class. It can have abstract and non--abstract methods.\n" +
            "• An Interface is a blueprint of a class. It is a template and it is declared with interface keyword. It can have abstract methods,\n" +
            "default methods, static methods and public final static variables\n" +
            "• When we want to use Abstract class, we use “extend” keyword. When we want to use Interface, we use “implement”\n" +
            "keyword.\n" +
            "• Abstract class and interface both are used to achieve abstraction Both cannot be instantiated; we cannot create an object",
        t: 2,
    },
    {
        q: "Can we override the static methods?",
        s:
            "No, we can not override static methods. If a static method is created with a similar method signature as a method being passed down by inheritance this will be method hiding, not  overriding.",
        t: 2,
    },
    {
        q: "Can we execute a program without main() method?",
        s:
            "Yes, one of the ways to execute the program without the main method is using static block. Also, in testing we use other approaches such as the Test annotations to run the code.",
        t: 2,
    },
    {
        q: "What is difference between stack and heap?",
        s:
            "Both are used for memory but have different purposes. Stack: Stores primitives, method calls, and references; Heap: Stores the objects themselves. The String pool is also in the heap.",
        t: 2,
    },
    {
        q: "What are Wrapper classes?",
        s:
            "Wrapper classes are object representations of primitive datatypes. These classes are needed to be able to store primitive like data in collections such as ArrayList. These wrapper classes also have useful utility methods.",
        t: 2,
    },
];
const GITHUB = [
    {
        q: " What is GitHub?",
        s:
            "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
        t: 2,
    },
    {
        q: "What is a repository?",
        s:
            'Its a "cloud" where the project can be stored and worked on. There is a local repository which is on the ground level, and then there is a remote repo(aka Origin) that is in the sky cloud on Github.com. We pull FROM the sky to the ground and push FROM the ground TO the sky.',
        t: 2,
    },
    {
        q: "What are some Git commands?",
        s: "Pull, Commit, Push",
        t: 2,
    },
    {
        q: " What is Remote & Local Repository?",
        s:
            "Local repo is the repo on your local hard drive. The remote repo is literally a cloud thats connected to a server that connected to GitHub.com. THIS IS NOT A GREAT ANSWER.",
        t: 2,
    },
    {
        q: "What is the gitignore file?",
        s:
            "gitignore file is a text file that tells Git which files or folders to ignore in a project. A local . gitignore file is usually placed in the root directory of a project. ... Each new line should list an additional file or folder that you want Git to ignore. The entries in this file can also follow a matching pattern.",
        t: 2,
    }, {
        q: "How do you merging branch with master",
        s:
            "--go to your second branch do next steps\n" +
            "git add .\n" +
            "git commit -m \"your comment\"\n" +
            "--go to your master branch\n" +
            "git merge \"branchName\"\n" +
            "--if its not merging we need to do git commit -m \"comment\" again from master branch",
        t: 2,
    }, {
        q: "What is pull request?",
        s:
            "",
        t: 2,
    }, {
        q: "How do you resolve conflict on git?",
        s:
            "",
        t: 2,
    },
];
const SELENIUM = [
    {
        q: "What is Selenium and how does it works?",
        s:
            "Selenium is a portable framework for testing web applications. Primarily it is for automating web applications for testing purposes, SELENIUM AUTOMATES BROWSERS...THAT'S IT! Helps us drive a browser they way we want to drive it.",
        t: 2,
    },
    {
        q: "What pom.xml stands for?",
        s:
            "Project Object Model. It is the fundamental unit of work in Maven. It is an XML file that contains information about the project and configuration details used by Maven to build the project. It contains default values for most projects. Like the test directory which is: src->test->java. When executing a task or goal, Maven looks for the POM in the current directory. It reads the POM, gets the needed config. info, then executes the goal.",
        t: 2,
    },
    {
        q: "What is Maven?",
        s:
            "A build automation tool for creating java projects",
        t: 2,
    },
    {
        q: "What is build?",
        s:
            "A build is numerous automated processes that are created and ran to execute repeated commands. There are 3 build lifecycles in Maven: default, clean and site. They all facilitate in running your Java code. The DEFAULT lifecycle handles your project deployment, the CLEAN lifecycle handles project cleaning, while the SITE lifecycle handles the creation of your project's site documentation.",
        t: 2,
    },
    {
        q: "Can you mention the differences between maven & selenium?",
        s: "Maven is a build and Selenium is a collection of libraries",
        t: 2,
    },
    {
        q: "What is a WebDriver?",
        s:
            "It is a subclass of selenium libraries/superClass that allows us to open a browser by creating a new webDriver object (usually named Driver)",
        t: 2,
    },
    {
        q: "What is the folder structure when creating a project in maven?",
        s: "SRC --> Test --> Java --> ToYourCustomDirectory",
        t: 2,
    },
    {
        q: "What is XPath in Selenium?",
        s:
            "XPath in Selenium is an XML path used for navigation through the HTML structure of the page. It is a syntax or language for finding any element on a web page using XML path expression. XPath can be used for both HTML and XML documents to find the location of any element on a webpage using HTML DOM structure",
        t: 2,
    },
    {
        q: "How many different types of XPATh locators are there?",
        s: "There are 2 xpath locators." +
            "Absolute xpath starts with single slash ( / ), starting from root element and all the way to the element.\n" +
            "• Relative xpath starts with double slash ( // ), starting selection matching anywhere in the document.",
        t: 2,
    },
    {
        q: " What are the advantages and disadvantages of Selenium?",
        s:
            "1. Selenium is open source and free to use without any licensing cost.\n2. It supports multiple programming languages\n3. It supports multi-browser testing\n4. It has a good amount of resources and helping community\n5. It supports many operating systems\n6. Interact with the web application.\n\tDisadvantages:\n1. Selenium supports only web-based applications\n2. It doesn't have built-in reporting tool\n3. Cannot work with graphics, captchas, barcodes, shape. 4. It doesn't support file upload facility",
        t: 3,
    },
    {
        q: "What is Selenium tool set?",
        s:
            "1. Selenium IDE: Implemented as a Chrome and Firefox extension, and allows you to record, edit, and debug test\n2. Selenium Remote Control: to write automated web application UI tests in any programming language\n3. Selenium WebDriver: execute your tests against different browser\n4. Selenium GRID: runs your tests on different machines against different browsers in parallel",
        t: 2,
    },
    {
        q: "What it's the difference between Implicit Wait Vs Explicit Wait?",
        s:
            'An explicit wait makes WebDriver wait for a certain condition to occur before proceeding further with execution. An implicit wait makes WebDriver poll the DOM for a certain amount of time when trying to locate an element, before throwing "NoSuchElement Exception"',
        t: 2,
    },
    {
        q: "What are various ways of locating an element in Selenium?",
        s:
            "By using any of the Selenium locators: Id, name, className, xpath, cass, linkText, partialLinkText, tagName",
        t: 2,
    },
    {
        q: "Reason why you would not be able to locate an element.",
        s:
            "Locator changed, there is and iframe, Waiting time (page is loading slowly or Element is dynamic), page is not fully loaded/opened, page changes and that element doesn't exist anymore",
        t: 2,
    },
    {
        q: "What is Absolute and Relative xpath?",
        s:
            "Absolute Xpath (starts with single (/): It uses Complete path from the Root Element to the desire element. Relative Xpath (starts with double (//): You can simply start by referencing the element you want and go from there. Relative Xpath are always preferred as they are not the complete paths from the root element.",
        t: 2,
    },
    {
        q: "How can we move to parent element using xpath?",
        s: "Using (..)expresion in xpath, we can move to parent element",
        t: 2,
    },
    {
        q: "Mention 4 exceptions in Selenium and how to handle them",
        s:
            "Though there are many Exception classes under WebDriverException, we commonly see these: NoSuchElementException, NoSuchWindowException, NoSuchFrameException, NoAlertPresentException, InvalidSelectorException, ElementNotVisibleException, ElementNotSelectableException,TimeoutException, NoSuchSessionException, StaleElementReferenceException",
        t: 2,
    },
    {
        q: "Differences between driver.close and driver.quit command",
        s:
            "driver.close() is used to close the current browser. driver.quit() is used to close all the browser instances",
        t: 2,
    },
    {
        q: "How can we move to the nth child element using xpath?",
        s:
            "There are two ways:\n1. Using square brackets with index position, like div[2] will find the second div element.\n2. Using position() method like dive[position()=2] will find the second div element",
        t: 2,
    },
];
const JIRA = [
    {
        q: "How do you automate a Test Case from Jira?",
        s:
            "User Story -> AC -> Test Case(Manual and/or Automated) -> Test Execution",
        t: 2,
    },
    {
        q: "What is a bug and How do you create a bug ticket?",
        s:
            "A bug is a defect found while doing a test execution. It can be reported through the comments of the specific step in the test execution or a Bug issue can be created on Jira linked to that specific step of the test execution",
        t: 2,
    },
    {
        q: "Where do you  get your test data?",
        s:
            "BA provides, dummy data websites (generated in excel), java faker and developers provide from database",
        t: 2,
    },
    {
        q: "How do you test login functionality?",
        s: "",
        t: 2,
    },
    {
        q: "What is JIRA?",
        s: "● Project management tool and helps tracks defects\n" +
            "○ Allows for planning and time management\n" +
            "○ Tracks due dates/assignment\n" +
            "● Tester only in backlog, and active sprints",
        t: 2,
    },
    {
        q: "For bug tracking what tools do you use?",
        s: "● JIRA treats all work inside it as an Issue\n" +
            "● So, in JIRA to create a defect would be to create an issue of the type “Bug”.",
        t: 2,
    },
    {
        q: "What's the difference epic and tickets?",
        s: "",
        t: 2,
    },
    {
        q: "How do you automate User Stories from JIRA?",
        s: "● Look at description - Agile story\n" +
            "● Create feature file and save file as Jira story.feature\n" +
            "○ Add scenario located in Acceptance criteria\n" +
            "● Run cukesRunner with dryRun=true\n" +
            "● Implement the methods\n" +
            "● BEFORE AUTOMATING THE TEST CASES IN JIRA ALWAYS MANUAL TEST IT FIRST",
        t: 2,
    },
    {
        q: "How you integrate Selenium with Jira?",
        s: "● Selenium does not have a built-in integration with Jira.\n" +
            "● But there are plugins that integrate selenium testing framework with Jira.\n" +
            "○ Xray (Jira plugin, Jenkins plugin)\n" +
            "○ Zephyr (Jira plugin)",
        t: 2,
    },
    {
        q: "What is JENKINS?",
        s: "● Continuous Integration and Deployment tool. 3 components of Jenkins\n" +
            "○ 1. Code change à Devs makes changes to the application code\n" +
            "○ 2. Test à CI tool automatically picks up the changes and tests the application\n" +
            "○ 3. Deploy à CI tool deploys the application with changes",
        t: 2,
    },
    {
        q: "What is Jenkins job?",
        s: "● Everything is done by creating a job\n" +
            "● A task that Jenkins performs based on its schedule\n" +
            "● Made of several steps\n" +
            "● Can have a trigger that determines when it runs\n" +
            "● Reports the results of the run automatically",
        t: 2,
    },
    {
        q: "What is continuous Integration?",
        s: "CI is a development practice that requires developers to integrate code into a shared repository several times a day.\n" +
            "● Every time the software’s code is changed, it is built and tested automatically",
        t: 2,
    },

    {
        q: "What is continuous deployment?",
        s: "Code changes are automatically built, tested, deployed, and prepared for a release to production\n" +
            "● Each check-in is then verified by an automated build, allowing teams to detect problems early.",
        t: 2,
    },
    {
        q: "Do you maintain Jenkins?",
        s: "● It is done by Special Team, environment team, architecture team\n" +
            "● But i provide them information of my tests and configuration info and also the emails to send notifications.\n" +
            "○ Git path\n" +
            "○ Mvn code ; goals - compile, or verify -drunner=xml, etc\n" +
            "○ Time schedule for certain tests",
        t: 2,
    },
    {
        q: "What goes in the regression test?",
        s: "Depends on the team, test plan, scope, and business value",
        t: 2,
    },
    {
        q: "How many jobs in Jenkins?",
        s: "I personally set up 2-3 jobs for automated tests\n" +
            "○ 1 for smoke → Smoke is running daily 2,3 times a day , making sure that all environments are up and running\n" +
            "○ Full regression (running manual and automated tests)?\n" +
            "■ Before each production release(after 3 sprints)\n" +
            "■ Only very stable test cases are stored in full regression\n" +
            "■ Updating functionality\n" +
            "○ Minor regression\n" +
            "■ Runs at the end of sprint\n" +
            "■ Tests that are related to certain modules and functionalities\n" +
            "■ I use tags to specify which module to run",
        t: 2,
    },
    {
        q: "How is code deployed to your environment?",
        s: "Devs write the code, test it then is deployed in jenkins from dev to test environment\n" +
            "● What if it doesn't?\n" +
            "○ Talk to your developer and ask them to deploy it",
        t: 2,
    },
    {
        q: "Tell me about yourself?",
        s: "Nice Work",
        t: 5,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
];
const TECHNICKAL = [
    {
        q: "Can you explain how to reverse a String?",
        s:
            "Create a for loop that goes backwards(i--), find each character by using .charAt() then concat with String result from last to first within the loop.",
        t: 2,
    },
    {
        q: "Can you explain how to combine two arrays?",
        s: "",
        t: 2,
    },
    {
        q:
            "Can you explain how to create a custom method that returns odd numbers?",
        s: "Take a number(num) as a parameter. if(num%2!=0){ return true;}",
        t: 2,
    },
    {
        q:
            "Write a return method that can remove the duplicated values from String.",
        s: "",
        t: 2,
    },
    {
        q:
            "Write a return  method that can find the unique characters from the String.",
        s: "",
        t: 2,
    },
    {
        q:
            "Write a return method that check if a string is build out of the same letters as another string.",
        s: "",
        t: 2,
    },
    {
        q: "Write a return method that can find the frequency of characters.",
        s: "",
        t: 2,
    },
    {
        q: "Write a method that can return the sum of the digits in a string.",
        s: "",
        t: 2,
    },
    {
        q: "Write a method that can find the maximum number from an int Array.",
        s: "",
        t: 2,
    },
    {
        q: "Write a method that can find the minimum number from an int Array.",
        s: "",
        t: 2,
    },
    {
        q: "Write a return method that can concat two arrays.",
        s: "",
        t: 2,
    },
    {
        q: "Write  a method which can identifies given number is even or odd.",
        s: "public  static  String  identifyOddEven( int  n ) {\n" +
            "\n" +
            "return  n%2==0 ? \"Even\" : \"odd\" ; \n" +
            "\n" +
            "}",
        t: 2,
    },
    {
        q:
            'Write a method which prints out the numbers from 1 to 30 but for numbers which are a multiple of 3, print "FIN" instead of the number and for numbers which are a multiple of 5, print "RA" instead of the number. for numbers which are a multiple of both 3 and 5, print "FINRA" instead of the number.',
        s: "",
        t: 2,
    },
    {
        q:
            "Write a method that can divide two numbers without using division operator.",
        s: "",
        t: 2,
    },
    {
        q: "Swap two variable' values without using a third variable.",
        s: "        int a = 7;\n" +
            "        int b = 10;\n" +
            "        a = a+b;\n" +
            "        b= a-b;\n" +
            "        a = a-b;",
        t: 2,
    },
    {
        q:
            "Write a return method that returns the factorial number of any given number.",
        s: "",
        t: 2,
    },
    {
        q: "Write a method that can check if a number is prime or not.",
        s: "    public boolean primeNumber(int num) {\n" +
            "        if (num < 2) {\n" +
            "            return false;\n" +
            "        }\n" +
            "        for (int i = 2; i < num; i++) {\n" +
            "            if (num % i == 0) {\n" +
            "                return false;\n" +
            "            }\n" +
            "        }\n" +
            "        return true;\n" +
            "    }",
        t: 2,
    },
    {
        q: "Write a return method that returns the  Fibonacci of any given number.",
        s: "",
        t: 2,
    },
    {
        q:
            'Given a list of fruit names: "Apple", "Pear", "Pomegranate", "Apple" Write a java operation to remove all the names Apple.',
        s: "",
        t: 2,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
    {
        q: "",
        s: "",
        t: 2,
    },
];
const API = [
    {
        q: "What is API?",
        s:
            "● It means connectivity. I mean API is the messenger that takes requests and tells a system what you want to do and\n" +
            "then returns the response back to you.\n" +
            "● API is the acronym for Application Programming Interface (which is software intermediary) that allows how\n" +
            "applications to talk to each other.",
        t: 2,
    }, {
        q: "API vs Webservices?",
        s: "API = browser: Selenium WebDriver, database: JDBC, MsOffice: Apache POI\n" +
            "● Webservices = if an API uses internet for communications, it is a webservices. *All webservices are API.\n" +
            "● No UI (user interface) à web application with UI and we use Selenium Webdriver\n" +
            "● We use:\n" +
            "○ SOAP → XML\n" +
            "○ REST → JSON, XML, TEXT\n" +
            "○ Postman, Rest Assured Library",
        t: 2,
    }, {
        q: "What is SoapUI? and how did you use it in your current project?",
        s: "● SOAP UI is the leading open source cross-platform API Testing tool\n" +
            "● SOAPUI allows testers to execute automated functional, regression, compliance, and load tests on different Web API.\n" +
            "● SOAPUI supports all the standard protocols and technologies to test all kinds of API's.\n" +
            "● SOAPUI interface is simple that enables both technical and non-technical users to use seamlessly.",
        t: 2,
    }, {
        q: "Name of some commonly used HTTP methods in REST based architecture?",
        s: "● Create → POST (send data to the server)\n" +
            "● Read → GET (retrieves data from given server using a given URI)\n" +
            "● Update → PUT (Replaces all current representations of the target resource with the uploaded content)\n" +
            "● Delete → DELETE (Removes all current representations of the target resource given by a URI.)",
        t: 2,
    }, {
        q: "HTML Status Codes?",
        s: "● 1xx → Informational\n" +
            "● 2xx → Success (request was accepted successfully) (200→ Ok, 201→ Created, 202→ Accepted, 204→ No Content)\n" +
            "● 3xx → Redirection\n" +
            "● 4xx → Client Error (400-Bad Request, 401-Unauthorized, 403-Forbidden, 404-Not Found, 405-Method not Allowed)\n" +
            "● 5xx → Server Error (500-Internal server Error, 502-Bad Gateway, 501-Not implemented, 503-Service Unavailable)",
        t: 2,
    }, {
        q: "What is status Code 403",
        s: "403-Forbidden",
        t: 2,
    }, {
        q: "What first thing you check when you get response?",
        s: "● Status quote (200 always mean Ok)\n" +
            "● We always check the 404 means not found\n" +
            "● rest-assured.io==> for automation to find the ECS machine in search type remote Desktop",
        t: 2,
    }, {
        q: "Http methods and request types",
        s: "● Get does not requires body\n" +
            "● Put requires body means UPDATE information\n" +
            "● Post requires body means CREATE information\n" +
            "● Delete does not requires body\n" +
            "● GET -> READ , POST -> CREATE, PUT -> UPDATE, DELETE -> DELETE\n" +
            "● POST VS PUT",
        t: 2,
    }, {
        q: "Parameters api",
        s: "● 2 TYPES:\n" +
            "○ PATH PARAMETER(VALUE WILL BE PART OF URL) QUERY/REQUEST\n" +
            "○ PARAMETERS (KEY+ VALUE FORMAT)",
        t: 2,
    }, {
        q: "What is Hamcrest Matcher for?",
        s: "Hamcrest is a framework for writing matcher objects allowing ‘match’ rules to be defined declaratively.",
        t: 2,
    }, {
        q: "What is Serialization and Deserialization",
        s: "Serialization; when we MAP a Java object to API JSON format (CONVERT JAVA OBJECT TO JSON);\n" +
            "○ Java object (POJO(Plain Old Java Object), BEANS) → MAP it to API JSON/XML\n" +
            "○ When we have an object from a class and MAP it to a JSON format in our RESTful API" +
            "Deserialization; API JSON/XML → MAP it to Java Object (JSON TO JAVA OBJECT)",
        t: 2,
    }, {
        q: "What is Authorization vs Authentication?",
        s: "● authentication --> who are you\n" +
            "● authorization --> what rights do you have\n" +
            "● Authentication is user and password\n" +
            "● Authorization has types:\n" +
            "○ no Authorization\n" +
            "○ Basic Authorization\n" +
            "○ Bearer Token\n" +
            "○ Inherit Auth from parent",
        t: 2,
    }, {
        q: "Types of API’s Authentication",
        s: "• Basic\n" +
            "○ Pre-emptive\n" +
            "■ If a service is configured to be pre-emptive, it will not request credentials from a client even though it\n" +
            "requires it.\n" +
            "■ If a request doesn't contain credentials, it will return 401 Unauthorized status code.\n" +
            "○ Challenged\n" +
            "■ When request reaches the API then API will tell that it requires credentials then client will provide\n" +
            "credentials.\n" +
            "○ oauth --> types of authentication where keys and tokens from 3rd party is used to authenticate. There are\n" +
            "2 types of oauth:\n" +
            "■ oauth1 à hard to implement\n" +
            "■ oauth2 à more secure\n" +
            "• Digest\n" +
            "○ It is more encrypted than basic. https...",
        t: 2,
    }, {
        q: "What is the advantage of using SOAP?",
        s: "● REST allows a greater variety of data formats, whereas SOAP only allows XML.\n" +
            "● Coupled with JSON (which typically works better with data and offers faster parsing), REST is generally considered\n" +
            "easier to work with.\n" +
            "● Thanks to JSON, REST offers better support for browser clients.\n" +
            "● REST provides superior performance, particularly through caching for information that’s not altered and not dynamic\n" +
            "● It is the protocol used most often for major services such as Yahoo, Ebay, Amazon, and even Google.\n" +
            "● REST is generally faster and uses less bandwidth. It’s also easier to integrate with existing websites with no need to\n" +
            "refactor site infrastructure. This enables developers to work faster rather than spend time rewriting a site from scratch.\n" +
            "Instead, they can simply add additional functionality.",
        t: 2,
    }, {
        q: "Difference between SOAP and RESTful web services?",
        s: "● RESTful supports JSON, XML, TEXT, however SOAP supports only XML\n" +
            "● REST is faster than SOAP based web services",
        t: 2,
    }, {
        q: "What is URI, purpose and format?",
        s: "● URI stands for Uniform Resource Identifier\n" +
            "● The purpose of URI is to locate a resource on the server hosting the web service.\n",
        t: 2,
    }, {
        q: "What WebServices do you use in your project?",
        s: "● I use Restful which is Representational State of Transfer and it communicates with XML and JSON, but my current\n" +
            "project uses JSON",
        t: 2,
    }, {
        q: "What is XML?",
        s: "In computing, Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding\n" +
            "documents in a format that is both human-readable and machine-readable.",
        t: 2,
    }, {
        q: "What is JSON?",
        s: "● It is JavaScript Object Notation (is a minimal, readable format for structuring data.)\n" +
            "● It is used primarily to transmit data between a server and web application, as an alternative to XML.\n" +
            "● Basically, a lightweight version of XML\n" +
            "● In Key: Value format\n" +
            "● Key is always in double quotes and value if string its double quotes and if numbers no quotes\n" +
            "● It is purely based on http protocol, - so it hits the link on the browser and see the results",
        t: 2,
    }, {
        q: "Do you know swagger? What is swagger",
        s: "● Swagger is an open-source software framework backed by a large ecosystem of tools that helps developers design,\n" +
            "build, document, and consume RESTful Web services.\n" +
            "● Swagger allows you to describe the structure of your APIs so that machines can read them.\n" +
            "● The ability of APIs to describe their own structure is the root of all awesomeness in Swagger\n" +
            "● similar to xml schema but for Json",
        t: 2,
    }, {
        q: "Difference between json vs gson",
        s: "● JSON is a format which has key and values\n" +
            "● GSON is a process of converting\n" +
            "○ from java to json(serialization),\n" +
            "○ from json to java(deserialization)",
        t: 2,
    }, {
        q: "How and where are you sending request?",
        s: "● Since i am using Rest, it has endpoints. My developers create public URLs and requests are sent to that URL",
        t: 2,
    }, {
        q: "Do you use any non-web services API?",
        s: "- I use Selenium API for browser, JDBC for database, and RestAssured for API",
        t: 2,
    }, {
        q: "Do you have API documentation website for your API?",
        s: "● Yes, we use swagger for our api documentation, and this is where the description and guidelines of API endpoints are",
        t: 2,
    }, {
        q: "How do you test API in your project?",
        s: "● In my current project we are testing not only our companies api but other external api.\n" +
            "○ For example, we use LinkedIn api to easily transfer the authorized end user’s info to our database.\n" +
            "● As a tester we send a API request and verify the status code, response body and checking the endpoints of the api\n" +
            "URL is working as expected\n" +
            "○ For example, in my project, I also do Positive/Negative testing of API 57\n" +
            "● Positive - I am sending valid requests, headers, parameters, and Json body and verify that response is 200/201\n" +
            "● Negative- I am sending invalid requests, headers, parameters, and body, expecting to the status to not be 200",
        t: 2,
    }, {
        q: "How do you test rest api?",
        s: "● I verify if each REST API endpoint is working as expected.\n" +
            "● I use POSTMAN for manual API testing and use RESTASSURED library in Java for automation.\n" +
            "● I send POST,PUT,GET, DELETE type of requests and verify response status code and response body, header.\n" +
            "● I also do positive and negative testing of API.\n" +
            "● When I do positive testing, I send valid request parameters , valid headers, valid request json body and verify that\n" +
            "response status code is 200 successful and Json response body data is also matching the expected.\n" +
            "● When I do negative testing, I send invalid request parameters , or invalid headers, or invalid request json body and\n" +
            "verify that response\n" +
            "● status code is not 200 and Json response body contains error message.",
        t: 2,
    }, {
        q: "Can All API endpoints use all of the Http protocols?",
        s: "It depends, My API developer decides if that URL works with GET,POST,PUT, or DELETE requests",
        t: 2,
    }, {
        q: "How do you manually test your API?",
        s: "I use Postman → it is a REST API client tool that test the REST API URL",
        t: 2,
    }, {
        q: "What tools for api testing you use?",
        s: "● Postman for manual testing\n" +
            "● Rest Assured library",
        t: 2,
    }, {
        q: "What are the types of Request in Rest API?",
        s: "● There are Get, Post, Put, and Delete requests\n" +
            "○ Get read data\n" +
            "○ Post creates data\n" +
            "○ Put updates data\n" +
            "○ Delete deletes data",
        t: 2,
    }, {
        q: "What are headers in REST API?",
        s: "● I am using Accept.(Content Type.JSON) type - checks what I am receiving should be in JSON or XML format\n" +
            "● And ContentType.(Contenttype.Json) - checks what i am sending should be in JSON format",
        t: 2,
    }, {
        q: "What is RestAssured Library?",
        s: "A non-web service api that's BDD format and helps integrate java code using deserialization and serialization to\n" +
            "extract data from the Json and transform it into a java object in order to store, verify, and validate the data to the\n" +
            "expected one.",
        t: 2,
    }, {
        q: "How are you using Enum in your project?",
        s: "I am using content Type to make sure that my response type is JSON format",
        t: 2,
    }, {
        q: "What is JsonPath?",
        s: "● Another way to validate response body\n" +
            "● JsonPath j=response.jsonpath;",
        t: 2,
    }, {
        q: "What methods are you using to verify the size of the response data?",
        s: "I use Matchers from Hamcrest\n" +
            "○ hasitems()\n" +
            "○ equalTo()",
        t: 2,
    }, {
        q: "How would I write a method where I need parameter with limit of 100 and path parameter of employee id = 100?",
        s: "I would write;\n" +
            "○ .and().params(\"limit\",100)\n" +
            "○ .and().pathParams(\"employee_id\", 110)",
        t: 2,
    }, {
        q: "What is Backend-API?",
        s: "● It is where application logic code is. Your conditions etc.\n" +
            "● How to test?\n" +
            "1) Manually → Using tools like Postman etc. By sending requests and verifying responses.\n" +
            "2) Automation → Java + RestAssured Library",
        t: 2,
    }, {
        q: "",
        s: "",
        t: 2,
    }, {
        q: "",
        s: "",
        t: 2,
    }, {
        q: "",
        s: "",
        t: 2,
    }, {
        q: "",
        s: "",
        t: 2,
    },


];
const BEHAVIORAL = [
    {
    q: "Tell me about yourself?",
    s: "",
    t: 5,
}, {
    q: "Describe your role?",
    s: "",
    t: 2,
},{
    q: "Can you describe your daily activity?",
    s: "",
    t: 2,
},{
    q: "Tell me about your project?",
    s: "",
    t: 2,
},{
    q: "What is your biggest Accomplishment?",
    s: "• One of my accomplishments I would say is establishing a great trustworthy relationship within the team.\n" +
        "• If you are asking for technical : When I joined my last project, the application had very less “id” so I had to spend hours to\n" +
        "locate one Webpage elements in my POM project so I communicated with developers and other team members and all\n" +
        "together we come up with the solution which I got the access to put “Id” in the application by myself.\n" +
        "• That was great for me it saved my and others time. So instead of spending time to locating elements I spend my time to\n" +
        "more creating automation test scripts and executing them.\n" +
        "• I really love to find and use new tools. And before I joined the team, they only had taken screenshots in PNG format. But I\n" +
        "started to use GIF animated images with notations which makes the issue a lot clearer to understand for the developers.",
    t: 2,
},{
    q: "Why are you looking for a job? (Why are you in the market?)",
    s: "I am looking for a job because my current project is ending soon. My manager told me I should start looking for new\n" +
        "opportunities.\n" +
        "• My company they would love to keep me. We are like a family there. But the company plans to relocate, and I don’t feel\n" +
        "comfortable with that. I am not planning to leave Dallas.",
    t: 2,
},{
    q: "Why did you apply for this position?",
    s: "• After looking at the job description, I think it matches my day-to-day activity and my experience.\n" +
        "• I was confident with the job description that’s why I applied.\n" +
        "• Also, I have done some research on the company and I am really excited about the company’s product and services like...",
    t: 2,
},{
    q: "Where do you see yourself 5 years from now?",
    s: "• I want to learn as much as possible to be more technical. I would like to move to Mobile Development. I want to be a\n" +
        "professional Mobile Developer.\n" +
        "• I want to be technically very competitive person 5 years from now.",
    t: 2,
},{
    q: "What is your weakness?",
    s: "Well, I think my weakness is that whenever I am given some responsibilities and there is a deadline for it, I work day and\n" +
        "night, sometimes 7 days a week. This is bad for my family life; the reality is I cannot sleep unless I am done with my\n" +
        "assignments.",
    t: 2,
},{
    q: "",
    s: "",
    t: 2,
},{
    q: "",
    s: "",
    t: 2,
},{
    q: "",
    s: "",
    t: 2,
},{
    q: "",
    s: "",
    t: 2,
}
];
const INTERVIEW = [
    {
        q: "Tell me about yourself?",
        s: "",
        t: 5,
    },
    {
        q: "Implicit Wait vs Explicit Wait?",
        s: "",
        t: 2,
    },
    {
        q: "What are various ways of locating an element in Selenium?",
        s: "",
        t: 2,
    },
    {
        q: "How to highlight an element?",
        s: "",
        t: 2,
    },
    {
        q: "Absolute and Relative Xpath?",
        s: "",
        t: 2,
    },
    {
        q: "How to test dynamic web page?",
        s: "",
        t: 2,
    },
    {
        q: "Difference between close() and quit() webdriver commands?",
        s: "",
        t: 2,
    },
    {
        q: "Difference between xpath and css selector?",
        s: "",
        t: 2,
    },
    {
        q: "How to maximize a webpage?",
        s: "",
        t: 2,
    },
    {
        q: "What is Thread.sleep()?",
        s: "",
        t: 2,
    },
    {
        q: "Difference between method Overloading and method Overriding",
        s: "",
        t: 2,
    },
    {
        q: "Difference between Set, List and Map in Java",
        s: "",
        t: 2,
    },
    {
        q: "What is Array? Array's pros and cons",
        s: "",
        t: 2,
    },
    {
        q: "What does 'immutable class' means? What classes are immutable in Java?",
        s: "",
        t: 2,
    },
    {
        q: "Difference between StringBuffer and String Builder",
        s: "",
        t: 2,
    },
    {
        q: "Difference between an Exception and Error in JAVA",
        s: "",
        t: 2,
    },
    {
        q: "Differences between HashMap and HashTable",
        s: "",
        t: 2,
    },
    {
        q: "What is pom.xml",
        s: "",
        t: 2,
    },
    {
        q: "what is m2 directory",
        s: "",
        t: 2,
    },
    {
        q: "explain the soft assert and hard assert",
        s: "",
        t: 2,
    },
    {
        q: "what is your contribution on release time",
        s: "",
        t: 2,
    },
    {
        q: "video volume control program ",
        s: "",
        t: 2,
    },
    {
        q: "explain OOPs concepts",
        s: "",
        t: 2,
    },
    {
        q: "explain the exception concept in Java",
        s: "",
        t: 2,
    },
    {
        q: " explain lambda in java",
        s: "",
        t: 2,
    },
    {
        q: "git process flow",
        s: "",
        t: 2,
    },
    {
        q: "explain about client server testing experience",
        s: "",
        t: 2,
    },
    {
        q: "explain about the testing documentation process",
        s: "",
        t: 2,
    },
    {
        q: "Customer is always right, what do you think about this?",
        s: "",
        t: 2,
    },
    {
        q: "What would your manager say about you?",
        s: "",
        t: 2,
    },
    {
        q: "Given an Array print out the duplicates?",
        s: "",
        t: 2,
    },
    {
        q: "Access modifier in Java",
        s: "",
        t: 2,
    },
    {
        q: "Tell me the query for display all data in this table?",
        s: "",
        t: 2,
    },
    {
        q: "Inner join outer join?",
        s: "",
        t: 2,
    },
    {
        q: "How do you open the browser in Selenium? Code?",
        s: "",
        t: 2,
    },
    {
        q: "If your driver could not get the web page to open, what could be the reason, and how would you address it?",
        s: "",
        t: 2,
    },
    {
        q: "What exceptions have you had in Selenium (not Java), and how did you handle them?",
        s: "",
        t: 2,
    },
    {
        q: "What is the difference between Abstract class and Interface?\n",
        s: "",
        t: 2,
    },
    {
        q: "If the browser version is changed and your test is failing, how would you fix it? Which particular file would you have to configure to make your code work?",
        s: "",
        t: 2,
    },
    {
        q: "What is POJO, and what do you use it for? What does the POJO class contain?",
        s: "",
        t: 2,
    },
    {
        q: "When would you use Agile, and when would you use Waterfall methodologies?",
        s: "",
        t: 2,
    },
    {
        q: "Where would you like to be in your career five years from now?",
        s: "",
        t: 2,
    },
    {
        q: "How do you keep yourself up to date with tools and technology in your field?",
        s: "",
        t: 2,
    },
    {
        q: "Tell me about a time when your team didn’t meet a deadline; what was the reason, and how did you handle it?",
        s: "",
        t: 2,
    },
    {
        q: "Tell me about how you manage the time difference when working with offshore teams",
        s: "",
        t: 2,
    },
    {
        q: "Do you play any role in hiring new members for your team?",
        s: "",
        t: 2,
    },
    {
        q: "If someone in your team was underperforming, how would you address it?",
        s: "",
        t: 2,
    },
    {
        q: "How did you transition from manual testing to automation?",
        s: "",
        t: 2,
    },
    {
        q: "How would you decide whether to test a feature manually or automate?",
        s: "",
        t: 2,
    },
    {
        q: "What is your understanding of “Testing to break”?",
        s: "",
        t: 2,
    },
    {
        q: "Can you tell me the steps for connecting to the database?",
        s: "",
        t: 2,
    },
    {
        q: "How many test cases have you written in your  project?",
        s: "",
        t: 2,
    },
    {
        q: "They shared a link with me, it had 5 buttons. When you click on each button, it lights up and turns blue and goes off again. They asked: How would you write a logic to click on all five web elements?",
        s: "",
        t: 2,
    },
    {
        q: "Tell me about Selenium WebDriver. What is it and how do you use it?",
        s: "",
        t: 2,
    },
    {
        q: "Have you built a framework from scratch? Can you tell me about your framework?",
        s: "",
        t: 2,
    },
    {
        q: "What is the difference between Path parameter and Query Parameter?",
        s: "",
        t: 2,
    },
    {
        q: "Why do we try to avoid using Thread.Sleep?",
        s: "",
        t: 2,
    },
    {
        q: "How do you interact with a dropdown?",
        s: "",
        t: 2,
    },
    {
        q: "How do you handle pop-ups?",
        s: "",
        t: 2,
    },
    {
        q: "If you click a link/button and it opens a new window, how do you switch between these windows?",
        s: "",
        t: 2,
    },
    {
        q: "What is a Stale Element Exception? And how to you handle",
        s: "",
        t: 2,
    },
    {
        q: "Data provider annotation? Data Driven?",
        s: "",
        t: 2,
    },
    {
        q: "TestNG annotation",
        s: "",
        t: 2,
    },
    {
        q: "What kind of API have you worked with?",
        s: "",
        t: 2,
    },
    {
        q: "Status Code 206? ",
        s: "",
        t: 2,
    },
    {
        q: "What interfaces do you use in Selenium?",
        s: "",
        t: 2,
    },
    {
        q: "What is the difference between Method Overloading, and Method Overriding?",
        s: "",
        t: 2,
    },
]

