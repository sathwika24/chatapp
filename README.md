component hire

Index 
    chatSideBar
        convesationList - []
            converstionItem - ele
                -isOnline - true
                -numberOfUnreadMessages - 10
                -name - Ash
                -messageShortform - Lorem ipsum dolor sit amet
    chatMainWindow
        chatList
            chatItem
                -from
                -to
                -time
    chatProfileWindow


[
    0 - ashray []
    sathwika []
    bennie []
    thomas []
]

conversationArray = 


dataArray = [
    {   
        isOnline: true
        numberOfUnreadMessages: 10
        name: 'Ash'
        messageShortform: 'Lorem ipsum dolor sit amet'
        conversationArray: [{
            from: 'Ash'
            to: ''
            time: ''
        }]
    },
    {   
        isOnline: true
        numberOfUnreadMessages: 10
        name: 'Ash'
        messageShortform: 'Lorem ipsum dolor sit amet'
    }
]

design specification

       -client requirement
       -designer project analysis
         -login page
           -login
           -password
         -chat page 
           -chatprofilelist
                -logo
                -search input
                -chat list
           -chatconversation 
                -header (name,icons)
                -body(conversation list)
                -footer (input,send,attachments)
           -chatprofildetails 
                -profilepicture
                -details
                -location
                -number
                -mail
                -media

development details
        -responsive(yes)
        -using
            -react js
            -bootstrap(CSS UI Framework)
            -storybook
            -fontawsome
        -color reference (violet,white)    


project content
  -client inputs
  -chatprofilelist
        -chatprofilelistitems []
            isOnline: true,
            id:1,
            link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" ,
            numberOfUnreadMessages: 5,
            profilename: 'Ash',
            messageshortform: 'Lorem ipsum dolor sit amet',
  -chatconversation
        -chatlist
            -from
            -to
            -time
 -chatusernameprofiledetails
     -profile items
        -isonline:true,
        -link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        -profilename:'Ash',
        -detailsofperson:'Founder,Aviato "Bachrnamity"',
        -location:'San Francisco,California',
        -mobileno:"5678998765",
        -emailid:"ash635@avtio.com",

  layout

    -landingpage          
        -navbar(header)
        -content(body)
        -footer

    -loginpage
        -navbar(header)
        -loginform(body)
        -footer

    -registerpage
        -navbar(header)
        -registerform(body) 
        -footer

    -chatpage
        -chatprofilelistwindow
        -chatconversationwindow 
        -chatprofiledetailswindow 

  pages
    -landingpage
    -loginpage 
    -registerpage
    -chatpage    

  components
    -navbar
        -logo
        -companyname
        -login
        -register  
    
    -footer
        -logo
        -companyname
        -logo(instagram)
        -logo(facebook)
        -logo(twitter)
        -copyright

    -content
        -

    -loginform
        -email (validation)//input
        -password(validation)// input
        -reset(button)
        -login(button)

    -registerform
        -firstname (input)
        -lastname (input)
        -email (input)
        -password (input)
        -re-enter password (input)
        -submit (button)

    -chatprofilelistwindow
        -logo,name
        -icon(adding)
        -icon(dropdown)
        -chatporfilelist

    -chatprofilelist[]
        -avatar
        -profilename
        -noofunreadmessages
        -lasttext  
        -index 

    -chatconversationwindow
        -profilename 
        -icon(phone)
        -icon(viedo-camera)
        -conversationlist
        -input (text)
        -icon(smile-o)
        -icon(attachments)
        -icon(paper-rocket)

    -conversationlist
        -conversationarray[]
            -from
            -to
            -text
            -time

    -chatprofiledetailswindow
        -avatar
        -profilename
        -details
        -location
        -phone no
        -mail-id
        -media

    -avatar
        -image (link)
        -online
        -id 

       

    




