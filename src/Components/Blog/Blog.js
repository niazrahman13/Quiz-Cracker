import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card mt-24 w-8/12 mx-auto">
                <div className="border rounded-lg border-indigo-600 my-4 card-body">
                    <h2 className="card-title">What is The purpose of React Router?</h2>
                    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank" href="https://www.javatpoint.com/react-router#:~:text=ReactJS%20Router%20is%20mainly%20used,redirected%20to%20that%20particular%20route.">More Details</a></button>
                    </div>
                </div>

                <div className="border rounded-lg border-indigo-600 my-4 card-body">
                    <h2 className="card-title">How does Context Api Works?</h2>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank" href="https://www.loginradius.com/blog/engineering/react-context-api/#:~:text=The%20React%20Context%20API%20is,to%20state%20management%20using%20Redux.">More Details</a></button>
                    </div>
                </div>

                <div className="border rounded-lg border-indigo-600 my-4 card-body">
                    <h2 className="card-title">Describe UseRef-</h2>
                    <p>useRef is a hook introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank" href="https://www.knowledgehut.com/blog/web-development/react-useref">More Details</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;