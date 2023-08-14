## amet fronend app

Location in Mac:
/Users/carlosinfante/Desktop/coding-projects/full-stack-projects/amet-web-full/frontend

Location in GitHub
git remote add origin https://github.com/carloscfgos1980/React-Redux-toolkit-amet_web.git

# Goals:
- Form
- REST API: Fetch, POST, PATCH, DELETE
- usePAragrams
- useEffect
- display images
- display video from youtube
- send emails: footer
- bootstrap: carousell, alarms, navBar
* NavBar did not work while deploying with Azure so I need to changed to a normal NavBar
- using .git (animated image)
- Condictional rendering
- CSS. hover the image and show text

* I need to work on the back end in order to make a correctional table and get the paintId from Custmer table.

# Installations
    npx create-react-app todo-app
    npm install redux react-redux
    npm install @reduxjs/toolkit
    npx json-server --watch data/db.json --port 8000 //Create a fake rest API. check note bellow.  
    npm i react-router-dom //to create links. This needed update
    npm install recharts //To implement charts
    npm install react-bootstrap bootstrap
    npm install react-bootstrap-icons --save
    npm i react-youtube
    npm install react-native-webview
    npm install react-native-youtube-iframe
    npm install --save-dev @babel/plugin-proposal-private-property-in-object //Fix a problem with this component

# Shop:
- PaintingCarousel.js - It is the shop
- Painting.js - It is the selected painting to watch the details by using useParagrams

# Shopping cart process:

ShowShoppingCart => ContactsClients.js (inputfield) => CheckData.js (it contains ClientTable.js) => Success.js
\*Check ClientTable.js how to display dynamically data on a table!


# UseParagrams
1.  src/App.js:

            </Route>
            <Route path="/art/:title">
              <Paintings />

2.  src/components/PaintingsCarousel.js:

                                     <Link to={`/art/${painting.title}`}> // Here is where the desireable item is selected by the title
                                        <img
                                            width='40%'
                                            src={painting.img}
                                            alt='slide'
                                        />
                                    </Link>

3.  src/components/Painting.js:
    const dispatch = useDispatch(); //lin 13
    const { title } = useParams(); //line 14

                {paintingsData.filter(painting => painting.title === title)
                    .map(painting => {
                      }
                      )}

- Looping thru the array of painting to select only the paint we clicked to be shown in the DOM
  N: When I used useParams. I couldn't import the image from public file so I had to use the follwing method and make a copy of the image folder into src folder, the method that I used was this one:
  <img src={require(`${imagen}`)}

# Bootstrap NavBar does not work while deploy in microsoft azure. I need Change the Nav artquitecture

# Tutoriales para deploy website

# Create DNS in Azure

https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain-azure-dns

# Create DNS Zone for Azure
https://learn.microsoft.com/en-us/azure/static-web-apps/azure-dns-zone

# Set up a custom domain in Azure Static Web Apps
https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain-external
