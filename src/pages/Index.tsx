
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Index = () => {
  const [isSetup, setIsSetup] = useState(false);
  
  useEffect(() => {
    // Check if we're running in an Outlook context
    if (typeof Office !== 'undefined' && Office.context) {
      setIsSetup(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl w-full glass rounded-2xl p-8 md:p-12 shadow-xl"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="h-20 w-20 bg-blue-500 rounded-xl flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-2"
          >
            Source Alta Metadata Collector
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            This add-in automatically collects Company ID metadata when emails are sent with deals@sourcealta.com in BCC.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white rounded-xl p-6 mb-8 border border-gray-100 shadow-sm"
        >
          <h2 className="text-xl font-medium mb-4 text-gray-900">How It Works</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-600 font-medium">1</span>
              </div>
              <div>
                <p className="text-gray-700">When you send an email with <strong>deals@sourcealta.com</strong> in BCC, a popup will appear.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-600 font-medium">2</span>
              </div>
              <div>
                <p className="text-gray-700">Enter the Company ID in the popup window.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="text-blue-600 font-medium">3</span>
              </div>
              <div>
                <p className="text-gray-700">The metadata is stored with the email, accessible via your Python scripts.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            {isSetup 
              ? "✓ Add-in is properly configured and ready to use" 
              : "This is a preview of the add-in. Deploy the manifest.xml file to use it in Outlook."}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
