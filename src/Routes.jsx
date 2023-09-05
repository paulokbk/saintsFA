import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

export default function AppRoutes() {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<h1>sobre page</h1>} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
