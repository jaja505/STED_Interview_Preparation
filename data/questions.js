const JAVA = [
  {
    q:
      "What is the difference between Default AccessMod and Protected AccessMod?",
    s: "",
    t: 2,
  },
  {
    q: "What are the differences between a Constructor and a Method?",
    s: "",
    t: 2,
  },
  {
    q: "What are the differences between Arrays and ArrayList in Java?",
    s: "",
    t: 2,
  },
  {
    q: "Can you explain how to reverse a String? (technical question)",
    s: "",
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
    s: "",
    t: 2,
  },
  {
    q: "What are the differences between Arrays and ArrayList in Java?",
    s: "",
    t: 2,
  },
  {
    q: "Can you explain how to reverse a String? (technical question)",
    s: "",
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
    s: "",
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
    q: " What is 508 testing?",
    s: "",
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
    s: "",
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
  {
    q: "",
    s: "",
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
    s: "",
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
    s: "",
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
    s: "",
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
    s: "",
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
