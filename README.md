# discudemy-skip-to-course
Tired of clicking through multiple pages to access Udemy courses on DiscUdemy?  Our extension streamlines the process by directly linking you to the "Take Course" page, bypassing unnecessary steps. Enjoy a faster and more convenient way to explore and enroll in Udemy courses.


## Overview

This Chrome extension streamlines the process of accessing Udemy courses from the DiscUdemy website. By modifying links on DiscUdemy, the extension eliminates the need for multiple clicks and page loads to reach the desired Udemy course page.

## How it works

- **Link Replacement:** The extension analyzes links on DiscUdemy and replaces those pointing to course detail pages with direct links to the corresponding "Take Course" page. This bypasses the intermediate course detail page.
- **Reserved Keywords:** To prevent unintended modifications, the extension excludes links containing certain reserved keywords (e.g., "search", "about", "contact").
- **Coupon Link Handling:** When activated on a "go/" page (the page containing the Udemy course link), the extension automatically clicks on any link containing a "couponCode" parameter.

## Installation

1. Download the manifest.json and content.js files.
2. Create a new Chrome extension.
3. Add the downloaded files to the extension's directory.
4. Load the unpacked extension.

## Usage

- Navigate to DiscUdemy.
- The extension will automatically modify eligible links.
- When on a "go/" page with a "couponCode" link, the extension will click it automatically.


## Limitations

- The extension's functionality relies on the specific structure of DiscUdemy. Changes to the website's layout or link patterns might affect the extension's behavior.
- The extension might not handle all edge cases or complex link structures.

## License
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in theSoftware without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
