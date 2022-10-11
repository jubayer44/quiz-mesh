import React from "react";

const Blog = () => {
  return (
    <div className="font-sans lg:w-1/2 mx-auto my-10 bg-slate-100 p-4 rounded-xl">
      <h1 className="text-3xl text-purple-600 mt-4 mb-8 font-bold text-center">
        Question Answer
      </h1>
      <div className="bg-violet-200 rounded-md p-4 my-8">
        <h1 className="text-2xl font-semibold">
          1. What is the purpose of react-router?
        </h1>
        <p className="ml-[22px] mt-[10px]">
          React Router is an API for React applications. <br />
          When we say dynamic routing, we mean routing that takes place as your
          app is rendering, not in a configuration or convention outside of a
          running app. That means almost everything is a component in React
          Router. <br />
          React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. <br /> <br />
          By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
        </p>
      </div> 
      <div className="bg-violet-200 rounded-md p-4 my-8">
        <h1 className="text-2xl font-semibold">
          2. How does context API work?
        </h1>
        <p className="ml-[22px] mt-[10px]">
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />
        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
        </p>
      </div>
      
      <div className="bg-violet-200 rounded-md p-4 my-8">
        <h1 className="text-2xl font-semibold">
          3. What is useRef Hook in React?
        </h1>
        <p className="ml-[22px] mt-[10px]">
        The useRef hook is a new addition in React 16.8. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object.  The returned object will persist for the full lifetime of the component. <br /> <br />
        <strong>Accessing the DOM nodes or React elements</strong> <br />
        If you've worked with React for a while, you might be used to using refs for this purpose. <br /> <br />
        <strong>Keeping a mutable variable</strong> <br />
        Both in class components and functional components using Hooks, we have two ways of keeping data between re-renders: <br />
        * In class components. <br />
        * In functional components.


        </p>
      </div>
    </div>
  );
};

export default Blog;
