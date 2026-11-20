import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import TestPage from "./components/pages/TestPage.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lecture/:name" element={<TestPage />} />
            <Route path="/ex/:name" element={<TestPage />} />
            <Route path="/marathon" element={<TestPage />} />
            <Route path="/random/:count" element={<TestPage />} />
        </Routes>
    );
};

export default App;