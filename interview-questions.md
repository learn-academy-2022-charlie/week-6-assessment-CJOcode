# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 
    The foreign key that is missing is belongs_to. This key would be put in the Student model because it is the child component. 

  Researched answer:
    To fix this issue you must first update the students class and add belongs_to :cohort to students.rb which describes the relationship ("association") between the two models. Then, when creating the Students model we must add the foreign key which is the model name of the parent class_id; so in this case I would call it cohort_id. Then you can add any other columns you would like to the students class.



2. Which RESTful routes must always be passed params? Why?

  Your answer: 
    The routes that would must have RESTful routes are SHOW, UPDATE, and DESTROY. SHOW, because it specifically needs to be told what piece of data to show to the user. UPDATE needs to be told what data requires an update. Also, when trying to delete something DESTROY needs to be told the specific data you want to erase.

  Researched answer:
    I missed one route which is EDIT, it also need to be told which specific HTML form to return to be edited. The Restful routes that need a param are SHOW, UPDATE, DESTROY, EDIT. SHOW, because it specifically needs to be told what piece of data to show to the user. UPDATE needs to be told what data requires an update. Also, when trying to delete something DESTROY needs to be told the specific data you want to erase.


3. Name three rails generator commands. What is created by each?

  Your answer:
    One generator that comes to mind is Resource which is used when generating a model. This adds all the needed basic components for a rails app, while also giving you the additional ease of not having to write out the routes because it will generate them automatically. Another is Model which generates a basic model in rails but doesn't have additional route generator like resource. Lastly, would be New which creates a folder for the Rails app.

  Researched answer:
    Rails NEW sets you up with a entire Rails directory with all the code that you need to run any application. If you would like to stop some specifc file form being generated you can add --skip-"name of file". Generating a SCAFFOLD will download you a model, database migration, controller, and a test suite for each of the sections, making this a very useful generator when creating an app. Also, you have MODEL which give you the most basic starting point for a app only creating the basic files such as model, routes, and views, all being empty making you having to manually enter all the information with out any help.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students  
  --> the name of this method would be INDEX, this would show us all of the students that we created in our database.

action: "POST"   location: /students
  --> the name of this method would be CREATE, this would create us a new student in our data base.      

action: "GET"    location: /students/new
  --> the name of this method would be NEW, this would provide us with the html form to then post creating a new student in our data base.     

action: "GET"    location: /students/2  
 --> the name of this method would be SHOW, this would show us the 2nd student in our data base.     

action: "GET"    location: /students/2/edit  
  --> the name of this method would be EDIT, this would provide us with the html form that allows us to edit the second student, to then update that student in our data base.      
  
action: "PATCH"  location: /students/2  
  --> the name of this method would be UPDATE, this would update the second student in our database after we edited it. 

action: "DELETE" location: /students/2      
  --> the name of this method would be DESTROY, this would delete the second student in our data base.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a CEO, I want to be alerted when I have important meetings, so that I wont forget about them during my busy schedule

2) As Collin, I would like to set my favorite songs as the sound that alerts for each task, so that the sounds can help me remember which task i have to do without looking at my phone.

3) As an athlete, I would like to keep track of my daily meals, so that I can make sure im hitting my daily caloric intake.

4) As a teacher, I would like to see a page that has a full calender month, so that I can better plan for the upcoming curriculum.

5) As a mother, I would like to have to login every time, so my children don't mess with my schedule

6) As a mechanic, I would like to have a section where I can enter client names with there scheduled date, so that I can easily remember who is scheduled.

7) As a barber, I would like to have a spot where I can enter contact information, so that I can easily be in contact with my clients.

8) As a restaurant owner, I would like to keep track owner my weekly shipments of food, so that I know when to record inventory.

9) As a pet groomer, I would like to add pictures of the dog I cut that day, so that I can remember how that client likes their pet's hair cut.

10) As a accountant, I woulds like to have a note section, so that I can write in detail about the task I have to complete.

