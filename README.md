
# Source Alta Metadata Collector

This project is an Outlook add-in that collects Company ID metadata when emails are sent with deals@sourcealta.com in BCC. The metadata is stored as a custom property with the email, making it easily accessible for data processing via Python scripts without needing to parse the email body.

## Features

- Automatically detects when deals@sourcealta.com is included in BCC
- Prompts users to enter a Company ID when sending emails
- Stores the Company ID as a custom property with the email
- Only requires input on new email threads (not replies)
- Clean, modern interface inspired by Apple design principles

## Deploying the Add-in

To deploy this add-in to Outlook:

1. Host this web application on a server (or use a service like GitHub Pages)
2. Update the URLs in the manifest.xml file to point to your hosted application
3. Add icon files to the public/assets directory
4. Sideload the manifest.xml file in Outlook (refer to Microsoft's documentation on sideloading Office Add-ins)

## Development

This project was built with:

- React
- TypeScript
- Tailwind CSS
- Office.js for Outlook integration
- Framer Motion for animations

## Accessing the Metadata via Python

To access the stored Company ID from Python, use Microsoft's Graph API or Exchange Web Services (EWS). Example Python code:

```python
from exchangelib import Credentials, Account, Configuration, DELEGATE

# Connect to Exchange
credentials = Credentials(username='your_email@example.com', password='your_password')
config = Configuration(server='outlook.office365.com', credentials=credentials)
account = Account(primary_smtp_address='your_email@example.com', config=config, 
                 access_type=DELEGATE, autodiscover=False)

# Get emails and their metadata
for item in account.inbox.all().order_by('-datetime_received')[:100]:
    # Access custom properties
    if hasattr(item, 'company_id'):
        print(f"Email: {item.subject}, Company ID: {item.company_id}")
```

## License

This project is licensed under the MIT License.
