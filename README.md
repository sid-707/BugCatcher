# BugCatcher

# Description

Tool for identifying types of bugs

# To Do

    - [ ] Plan implementation (architecture diagrams)
    - [ ] Choose stack (frameworks, languages etc)
    - [ ] Gather training data
    - [ ] Create designs (figma, AI generated)
    - [ ] Write feature tickets

# Starting the project

Run `docker compose up` to run the backend locally. Go to [localhost:3000](http://localhost:3000/) to see the app.

# Deploying the Backend

[Install gcloud CLI](https://cloud.google.com/sdk/docs/install)

`cd` into the backend folder.

You would have to be added to the project before you do this:
Run `gcloud config set project bugcatcher-404002`

Run `gcloud app deploy` to deploy the app.

Run `gcloud app browse` to open the app in the browser.

Go to `https://bugcatcher-404002.uc.r.appspot.com/` for the app on line.

# Architecture

e.g. Frontend (react) allows photo upload. Photo is sent to backend for ML analysis. Response sent back to frontend.

TODO Implemenent in draw.io

# Useful Links

Architecture for an Async Worflow: https://aws.amazon.com/blogs/architecture/managing-asynchronous-workflows-with-a-rest-api/

Similar idea: https://pyimagesearch.com/2018/04/30/a-fun-hands-on-deep-learning-project-for-beginners-students-and-hobbyists/
