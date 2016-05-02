### Version 0.10.1
1. Fix the propType of the `alignment` property on the dropdown and dropdown trigger components.

### Version 0.10.0
1. Introduces prop `alignment` with value of `'right'` or `'left'` (default `'left'`) to `DropdownTrigger`. The `alignment` property specifies against which side of the trigger element the menu will be aligned. For example, with a value of `'right'`, the right side of the menu would be aligned with the right side of the trigger element.

### Version 0.9.1
1. Fix Facets for IE

### Version 0.9.0
1. BREAKING CHANGE: Upgrading to support react ~0.14.0. No functions that are marked as deprecated in React ~0.14.0 are used in this release.

### Version 0.8.0
1. BREAKING CHANGE: Fix conflict with HTML button `type` property in `Button` component. New `Button` property is called `canonStyle`.
2. Add `isModal` property to `Popover` that adds a 50% opaque background to body overlay element.

### Version 0.7.2
1. Fix facets so they do not mutate the passed in selected criteria property

### Version 0.7.1
1. Minor fix to update the `StatusIndicator` component to render a `<span>` element instead of a `<statusindicator>` element
2. Also fixed the popovers in the demo popover section

### Version 0.7.0
1. Facets!
2. eslint upgrade
3. Karma upgrade

### Version 0.6.2
1. Upgrade tether version to 1.1.0

### Version 0.6.1
1. Hide dropdowns when dropdown items are clicked
2. Fix bad prop types where `children` and `className` were misused
3. Add contributing guide and scripts for setup and development

### Version 0.6.0
1. Allow `PopoverBody` to receive additional class names as a property.
2. Fixed an issue where autoFocus would cause popovers to scroll out of view

### Version 0.5.0
1. Allow `PopoverFooter` to receive additional class names as a property.

### Version 0.4.0
1. Dropdowns
2. `action` type for Buttons to create Action Buttons (with cog and caret icons)

### Version 0.3.2:
Refactored the tooltip trigger to not render a `<trigger>` element that wraps the actual trigger component.

### Version 0.2.3:
Fixed an issue where tethers were not getting cleaned up properly

### Version 0.2.2:
1. Tooltips
 - Created a `TooltipTrigger` component that can be used to create elements that will trigger the display of a tooltip when being hovered over or receiving focus

### Version 0.2.1:
1. Popover Changes
 - Allow manual setting of tether's offset
 - `target` now accepts a string ID or a function returning the element at which the popover will be pointing
 - Added `center` placement option which places the popover over the center of the target and does not render an arrow

### Version 0.2.0:
1. Popover
2. StatusIndicator
3. NPM Module
4. ButtonGroup now accepts additional class names

### Version 0.1.0:
1. Buttons
2. Button Group
 - with Processing Indicator
3. Progress Bars
