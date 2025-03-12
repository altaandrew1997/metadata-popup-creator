
# Deploying the Source Alta Metadata Collector Add-in

This document provides step-by-step instructions for deploying the Outlook add-in to GitHub Pages and then testing it in Outlook.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "metadata-popup-creator")
4. Choose "Public" visibility (required for GitHub Pages unless you have a paid GitHub plan)
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
3. Scroll down to "Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait for GitHub Pages to build and deploy your site (this may take a few minutes)
7. Once deployed, you'll get a URL like: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Step 4: Test the Add-in in Outlook

### For Outlook Web Access (OWA):

#### Method 1: Using Get Add-ins
1. Go to [Outlook Web Access](https://outlook.office.com)
2. Click "New message" to create a new email
3. Look for the "..." (More apps) button in the compose toolbar
4. Click "Get Add-ins"
5. Click "My add-ins" tab
6. Scroll to the bottom and click "Add a custom add-in" > "Add from URL"
7. Enter the URL to your manifest: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
8. Click "Install"

#### Method 2: Using Admin Settings
1. Go to [Outlook Web Access](https://outlook.office.com)
2. Click the gear icon (Settings) in the top-right corner
3. Search for "Add-ins" or look for "View all Outlook settings"
4. Go to "Mail" > "Add-ins"
5. Click "Add from URL" or "Custom add-ins"
6. Enter the URL to your manifest: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
7. Click "Install"

### For Outlook Desktop:

#### Windows:
1. Open Outlook desktop app
2. Click "Home" tab
3. Click "Get Add-ins" button (usually in the right side of the ribbon)
4. Click "My add-ins" tab
5. Scroll to the bottom and click "Add a custom add-in" > "Add from URL"
6. Enter the URL to your manifest: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
7. Click "Install"

#### Mac:
1. Open Outlook
2. Click "Tools" > "Add-ins"
3. Click the "+" icon and select "Add a custom add-in" > "Add from URL"
4. Enter the URL to your manifest: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
5. Click "Install"

## Testing the Add-in

1. Create a new email in Outlook
2. Add deals@sourcealta.com in the BCC field
3. When you click "Send", the add-in should intercept the send event and display a dialog asking for a Company ID
4. Enter a Company ID and click "Submit"
5. The email should be sent with the metadata attached

## Troubleshooting

- If you get "Manifest validation failed" errors:
  - Make sure your manifest.xml is properly formatted with no syntax errors
  - Check that all URLs in the manifest point to the correct GitHub Pages URL
  - Ensure all required files (HTML, JS, icons) are present in your repository
  - Verify your repository is public (or you have GitHub Pro/Enterprise for private repos)
  - Wait a few minutes for GitHub Pages to fully deploy your changes

- If the add-in doesn't appear:
  - Try refreshing Outlook or restarting the application
  - Check browser console for any errors (F12 in most browsers)
  - Ensure all URLs in the manifest file are correct and accessible
  - Make sure your GitHub Pages site is properly published and accessible

- To manually verify your files are published correctly, visit:
  - Main page: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
  - Manifest: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/manifest.xml`
  - Function file: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/function-file.html`
  - Company dialog: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/company-dialog.html`
