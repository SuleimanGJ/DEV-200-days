// Basic Debugging Commands
// # Start with inspector (listens on default port 9229)
// node --inspect app.js

// # Break on first line of application
// node --inspect-brk app.js

// # Specify a custom port
// node --inspect=9222 app.js

// # Enable remote debugging (be careful with this in production)
// node --inspect=0.0.0.0:9229 app.js
// Using Chrome DevTools for Debugging
// Start your application with node --inspect app.js
// Open Chrome and navigate to chrome://inspect
// Click on "Open dedicated DevTools for Node"
// Set breakpoints and debug your application