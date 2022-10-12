import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Home = () => {

    const loader = useLoaderData()


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://png.pngtree.com/background/20211217/original/pngtree-matrix-code-abstract-programming-background-picture-image_1593627.jpg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Greetings</h1>
                        <p className="mb-4">A quiz is a quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students' level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>
                    </div>
                </div>
            </div>
            <div>
                <Cart loader={loader}></Cart>
            </div>
        </div>
    );
};

export default Home;