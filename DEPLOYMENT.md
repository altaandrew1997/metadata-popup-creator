
# Deploying the Source Alta Metadata Collector Add-in

This document provides step-by-step instructions for deploying the Outlook add-in to GitHub Pages and then testing it in Outlook.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "sourcealta-outlook-addin")
4. Choose "Public" visibility (required for GitHub Pages)
5. Click "Create repository"

## Step 2: Push the Code to GitHub

1. Initialize git in your local project folder:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Connect to your GitHub repository:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. GitHub will provide a URL like: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Step 4: Update the Manifest File

1. Open `manifest.xml` in your project
2. Replace all instances of `YOUR-USERNAME` with your actual GitHub username
3. Replace all instances of `YOUR-REPO-NAME` with your repository name
4. Commit and push these changes:
   ```
   git add manifest.xml
   git commit -m "Update manifest URLs for GitHub Pages"
   git push
   ```

## Step 5: Test the Add-in in Outlook

### For Outlook Web Access (OWA):

1. Go to [Outlook Web Access](https://outlook.office.com)
2. Click on the gear icon (Settings) in the top-right corner
3. Click "View all Outlook settings"
4. Go to "Mail" > "Customize actions"
5. Under "Add-ins", click "Add from URL"
6. Enter the URL to your manifest.xml: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
7. Click "Next" and then "Install"

### For Outlook Desktop:

#### Windows:
1. Open Outlook
2. Click "File" > "Manage Add-ins" (this opens OWA in a browser)
3. Follow the OWA instructions above

#### Mac:
1. Open Outlook
2. Click "Tools" > "Add-ins"
3. Click the "+" icon and select "Add a custom add-in" > "Add from URL"
4. Enter the URL to your manifest.xml: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
5. Click "Install"

## Testing the Add-in

1. Create a new email in Outlook
2. Add deals@sourcealta.com in the BCC field
3. When you click "Send", the add-in should intercept the send event and display a dialog asking for a Company ID
4. Enter a Company ID and click "Submit"
5. The email should be sent with the metadata attached

## Troubleshooting

- If the add-in doesn't appear, try refreshing Outlook
- Check the browser console for any errors
- Ensure all URLs in the manifest file are correct and accessible
- Make sure your GitHub Pages site is properly published
