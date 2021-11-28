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
  // docSidebar: [{type: 'autogenerated', dirName: '.'}],

  community: ['community/support', 'community/devices', 'community/about'],

  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: true,
      items: [
        'introduction/index',
	'introduction/zoned-storage',
	'introduction/smr',
	'introduction/zns'
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'getting-started/index',
        'getting-started/prerequisites',
	'getting-started/nullblk',
	'getting-started/smr-disk',
	'getting-started/smr-emulation',
	'getting-started/zns-emulation'
      ],
    },
    {
      type: 'category',
      label: 'Linux Kernel Support',
      collapsed: true,
      items: [
        'linux/index',
        'linux/overview',
	'linux/config',
	'linux/zbd-api',
	'linux/sched',
	'linux/part',
	'linux/dm',
	'linux/fs'
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      collapsed: true,
      items: [
        'applications/index',
        'applications/zenfs'
      ],
    },
    {
      type: 'category',
      label: 'Tools and Libraries',
      collapsed: true,
      items: [
        'tools/index',
        'tools/util-linux',
	'tools/zns',
	'tools/sg3utils',
	'tools/libzbc',
	'tools/libzbd',
	'tools/libnvme',
	'tools/tcmu-runner',
	'tools/qemu'
      ],
    },
    {
      type: 'category',
      label: 'System Compliance Tests',
      collapsed: true,
      items: [
        'tests/index',
        'tests/zbc-tests',
	'tests/blktests'
      ],
    },
    {
      type: 'doc',
      label: 'Linux Distributions',
      id: 'distributions/linux'
    },
    {
      type: 'doc',
      label: 'Benchmarking Zoned Block Device',
      id: 'benchmarking/benchmark'
    },
    {
      type: 'doc',
      label: 'Frequently Asked Questions',
      id: 'faq/faq'
    },
  ],

};

module.exports = sidebars;
