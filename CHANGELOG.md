

## Unreleased  (yyyy-mm-dd)

### Highlights
NA

### Breaking changes
* Recharts is removed from dependency and DonutChart component is removed from library. (adef7f46)

### Migration guide
* For DonutChart (if you are using) install the library `@innovaccer/charts` and import the component from it like `import { DonutChart } from @innovaccer/charts`.

### Features
* Adds HorizontalNav and VerticalNav as new components.
* New components to support Card component, CardHeader, CardBody, CardFooter and CardSubdued are added. (91a51c90)

### Fixes
NA

### Improvements
* Removes automatic changelog generation. (fb27f302)

### Documentation
* Updates Card component stories. (5ce568f8)
* Updates Message component stories. (fa5a70fe)
* Updates HorizontalNav component stories. (19b6f28b)
* Improved css utilities documentation with ability to copy tokens and class names on a single click.

-------------------
## v2.0.0-6  (2021-04-22) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
* Description as a children in Message component is now deprecated, Please use description prop.

### Features
* Adds support for Icon sizes in Button component. (69f0d1a7)

### Fixes
* Fixes column size 3 issues. (71d608f1)
* Removes @types/classnames library, to use updated version of classnames library. (41809fa2)
* Fixes layering of multiple overlays. (a86eb33b)
* Fix controlled Dropdown search functionality issue. (e3e162ba)

### Improvements
* In Message component support for actions is added and component is redesigned according to new design. Also support for description prop is added and children is deprecated. (63c22d1e)
* In Label component ability to show optional hint as 'Optional' is added. (38ef846b)

### Documentation
* Updates Button component stories. (91920acd)

-------------------
## v2.0.0-5  (2021-04-14) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
NA

### Fixes
* Minor issues with liveEditor in DocPage are fixed. (007486c3)
* Updates sizing for small variant of Calendar component. (67f00da9)

### Improvements
NA

### Documentation
NA

-------------------
## v2.0.0-4  (2021-04-08) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
NA

### Fixes
* Fixes issue in updating horizontal scroll of Grid (Table). (35f44c96)

### Improvements
* Updates header label of Table component. (9d42ab1a)
* Adds react-dynamic-virtual-scroll library in table to improve scrolling. (1b721f6d)

### Documentation
NA

-------------------
## v2.0.0-3  (2021-04-02) 

### Highlights
* Calendar available in different sizes.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Introduced different sizes in Calendar component, now Calendar component sizes can be controlled by prop exposed for the same. (55f4207e)
* In DocPage ability to hide and show code on button click is added and feature to keep code panel expanded by default in embed mode is added. (ded41856) 

### Fixes
* In Breadcrumbs component Link component is used and removed old local subtleLink component. (e866178f)
* Scroll inside Collapsible panel component is fixed. (ded41856)
* classnames library version 2.2.6 is frozen to avoid unwanted updates and breaks. (ded41856)

### Improvements
NA

### Documentation
NA

-------------------
## v2.0.0-2  (2021-03-31) 

### Highlights
* New component: Collapsible
* Ability to edit and preview components directly in codeSandbox on single click.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Introduced noSandbox prop in story's docPage parameter to disable edit in code sandbox feature for specific story. (073dc0e8)
* new component Collapsible is added. (90c3a954)
* adds codeSandbox integration in docs page story preview. (0cdcbb33)

### Fixes
* Calendar component added to library build. (e3bb7dab)
* Fixes FullscreenModal's header for close button alignment. (7d269b8a)
* Updates html code indentation used in code sandbox. (eedd4bd6)
* Adds import generator to generate component imports for show code and edit in codeSandbox source codes. (becf40a3)
* Updates configs to support Story book version 6. (be41707e)
* updates titles of all stories to support SB6.  (dd072353)
* update title of page to be as of story title, enables args table tab. (c3ce929d)
* Support for month nav is fixed in Calendar component. (7cacd5bd)

### Improvements
NA

### Documentation
* Updates Button component stories. (5f8b8a9f)


-------------------
## v2.0.0-1  (2021-03-24) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
NA

### Fixes
* Fixes Layout (ROW, Column) components styling according to bootstrap css. (6fa16085)

### Improvements
* Removes all stories rendering from doc page of a single component and adds show and hide feature for source code of story on docPage. (9d4d216d)

### Documentation
NA

-------------------
## v2.0.0-0  (2021-03-19) 

### Highlights
* Support for storybook 6 added.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* upgrades storybook to 6.x, and all its dependencies to supported versions. (de09643a)
* Fixes Badge component styling. (4d77d53f)

### Fixes
NA

### Improvements
* Updates default style for Column component. (2c0b07c8)
* Adds size and appearance support in Link component. (3b6eee89)
* Adds support for count in horizontal navigation. (5a930857)

### Documentation
NA

-------------------
