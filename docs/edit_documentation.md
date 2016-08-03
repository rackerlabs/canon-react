# How To Edit The Documentation

### Repository Setup Instructions

1. Fork the repository for canon react

2. Clone the repository

3. Create a branch

4. Update `package.json` to the latest version

5. Run `scripts/update_gitbook` *(This script will install dependencies and npm install)*


### Adding a Static Page

1. Open `SUMMARY.md` and add section or subsection (*Indented*)

2. Create the `.md` file with the path given in `SUMMARY.md`

3. Add content

4. Run `scripts/update_gitbook`

5. Look at the changes on `localhost:4000`

### Editing An Existing Page

1. Find the `.md` file (or, for component pages, the `.jsx` file) and make changes

2. Run `scripts/update_gitbook`

3. Look at the changes on `localhost:4000`

### Adding a Component

##### *If the component is from a new release, update package.json and npm install*

1. Create the `.md` file for the component in the `docs/components` directory (*Will be the same html as every file in that directory*)

2. Add the component's section to `SUMMARY.md`

3. Create `.jsx` for component in `documentation/components` directory

4. Import that component and add it in `documentation/components/View.jsx`, similar to the others

5. Import that component in `documentation/components/AllComponents.jsx` and create the React class for it:
```javascript
export const COMPONENT = React.createClass({
  render() {
    return(
      <ComponentView id="COMPONENT-ID" name="COMPONENT NAME" >
        <COMPONENT_SECTION />
      </ComponentView>
    );
  }
});
```

6. In `documentation/documentation.jsx` add a `Route` for the new component with the new view from #5:
```javascript
<Route path="docs/components/COMPONENT.html" component={ section.COMPONENTVIEW }/>
```

7. Run `scripts/update_gitbook`

8. Verify changes are valid on `localhost:4000`

### Edit Page Styling

1. Open `styles/website.css`

2. Add styling there

3. Run `scripts/update_gitbook`

### Submit Changes

1. Create pull request by pushing the branch

2. Get pull request accepted by someone with access, then have them run the following step on the `master` branch of the repository

3. Run `scripts/publish_gitbook` *(This will handle pushing the new documentation)*

4. Check site on `rackerlabs.github.io/canon-react`
