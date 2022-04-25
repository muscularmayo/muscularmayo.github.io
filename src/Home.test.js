import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import TestComponent from "path-to-test-component";
import Home from './Home.js'

// arrange, act, assert

describe('Home Component', () => {
  it('renders correct heading', () => {
    const { screen.getByRole } = render(<Home />)
    expect(screen.getByRole("heading").textContent).toMatch("Chris Risden")
  })
})

