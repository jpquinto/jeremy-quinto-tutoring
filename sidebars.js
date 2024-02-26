/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  algebra1Sidebar: [{type: 'autogenerated', dirName: 'algebra-1'}],
  algebra2Sidebar: [{type: 'autogenerated', dirName: 'algebra-1'}],
  geometrySidebar: [{type: 'autogenerated', dirName: 'algebra-1'}],
  cspSidebar: [{type: 'autogenerated', dirName: 'csp'}],
  dsaSidebar: [{type: 'autogenerated', dirName: 'dsa'}],
  javascriptSidebar: [{type: 'autogenerated', dirName: 'javascript'}],
  precalculusSidebar: [{type: 'autogenerated', dirName: 'precalculus'}],
  otherSidebar: [{type: 'autogenerated', dirName: 'other'}],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
