import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import TestComponent from "path-to-test-component";
import Home from './Home.js'

describe('Home Component', () => {
  it('renders correct heading', () => {
    const { getByRole } = render(<Home />)
    expect(getByRole("heading").textContent).toMatch("Chris Risden")
  })
})

