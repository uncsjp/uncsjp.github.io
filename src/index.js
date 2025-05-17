import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import PrinciplesAndGoals from './pages/PrinciplesAndGoals'
import SjpOnCampus from './pages/SjpOnCampus'
import Newsletters from './pages/Newsletters'
import JoinTheOrg from './pages/JoinTheOrg'

import App from './App'
import NotFound from './NotFound'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="about_us" element={<AboutUs />} />
                    <Route
                        path="principles_and_goals"
                        element={<PrinciplesAndGoals />}
                    />
                    <Route path="sjp_on_campus" element={<SjpOnCampus />} />
                    <Route path="newsletters" element={<Newsletters />} />
                    <Route path="join_the_org" element={<JoinTheOrg />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
