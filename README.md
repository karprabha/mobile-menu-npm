# Mobile Menu

## Description

Mobile Menu is a progressively collapsing menu, similar to the one used by BBC. It allows you to create a responsive and user-friendly menu for your website.

## Installation

You can install Mobile Menu using npm:

```bash
npm install @karprabha/mobile-menu
```

## Usage

### Script Tag:

Include the Mobile Menu script in your HTML file using a script tag:

```html
<script src="{root dir}/node_modules/@karprabha/mobile-menu/dist/mobile-menu.js"></script>
<script>
    mobileMenu();
</script>
```

Make sure to adjust the {root dir} placeholder with the appropriate path to your project's root directory.

### JavaScript File:

Alternatively, you can import and use Mobile Menu in your JavaScript file:

```javascript
import mobileMenu from "@karprabha/mobile-menu";
mobileMenu();
```

## CSS Classes

To make the menu items functional, apply the following CSS classes to your menu structure:

```html
<div class="menu-container">
    <ul class="menu-items-container">
        <!-- Add your menu items here -->
        <li>Item 1</li>
    </ul>

    <div class="drop-down-menu-container">
        <h3 class="drop-down-toggle">More</h3>
        <div class="drop-down-container">
            <ul class="drop-down-items-container">
                <!-- Dropdown menu items will be dynamically populated here -->
            </ul>
        </div>
    </div>
</div>
```
