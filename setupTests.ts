import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';


// Automatically reset the DOM after every single test case
afterEach(() => {
  cleanup();
});


declare module "vitest" {
  interface Assertion<T = any>
    extends jest.Matchers<void, T>,
      TestingLibraryMatchers<T, void> {}
}
expect.extend(matchers);

