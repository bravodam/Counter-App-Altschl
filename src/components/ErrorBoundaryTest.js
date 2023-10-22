

const ErrorBoundaryTest = () => {
    //console.log("From error page")
  
  throw new Error('Intentional error for testing error boundary');
  
};

export default ErrorBoundaryTest;
