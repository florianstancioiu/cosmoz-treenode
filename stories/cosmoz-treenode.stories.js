import { html } from 'lit-html';
import '../src/cosmoz-treenode';
import { Tree } from '@neovici/cosmoz-tree/cosmoz-tree.js';

const TreeNodeTemplate = (
	{
		keyProperty,
		keyValue,
		valueProperty,
		pathSeparator,
		hideFromRoot,
		showMaxNodes,
		fallback,
	},
	{ loaded: { treeJson } },
) => {
	const ownerTree = new Tree(treeJson);

	return html`
		<cosmoz-treenode
			key-property=${keyProperty}
			key-value=${keyValue}
			value-property=${valueProperty}
			path-separator=${pathSeparator}
			?hide-from-root=${hideFromRoot}
			show-max-nodes=${showMaxNodes}
			fallback=${fallback}
			.ownerTree=${ownerTree}
		></cosmoz-treenode>
	`;
};

export default {
	title: 'Treenode',
	render: TreeNodeTemplate,
	tags: ['autodocs'],
	argTypes: {
		keyProperty: { control: 'text', description: '' },
		keyValue: { control: 'text', description: '' },
		valueProperty: { control: 'text', description: '' },
		pathSeparator: { control: 'text', description: '' },
		hideFromRoot: { control: 'boolean', description: '' },
		showMaxNodes: { control: 'number', description: '' },
		fallback: { control: 'text', description: '' },
		noWrap: { control: 'boolean', description: '' },
	},
	parameters: {
		docs: {
			controls: {
				exclude: [],
			},
			description: {
				component: 'The Cosmoz Treenode web component',
			},
		},
	},
	// This is how you fetch json files
	loaders: [
		async () => ({
			treeJson: await (await fetch('../demo/tree.json')).json(),
		}),
	],
};

export const CompanyKtwoktqtxv = {
	args: {
		pathSeparator: '#',
		keyProperty: 'id',
		keyValue: 'f7a21733-0e65-4985-9e40-a4fb00f3124f',
	},
	parameters: {
		docs: {
			description: {
				story: 'Displaying node: Company Ktwoktqtxv',
			},
		},
	},
};

export const CompanyDjpahhofjp = {
	args: {
		keyProperty: 'id',
		keyValue: 'fc78989a-d213-496c-80db-a4fb00f31252',
	},
	parameters: {
		docs: {
			description: {
				story: 'Displaying node: Company Djpahhofjp',
			},
		},
	},
};

export const CompanyDjpahhofjpHidingThreeNodes = {
	args: {
		keyProperty: 'id',
		keyValue: 'fc78989a-d213-496c-80db-a4fb00f31252',
		hideFromRoot: 3,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Displaying node: Company Djpahhofjp and hiding the first 3 nodes from root',
			},
		},
	},
};

export const CompanyKtwoktqtxvWithTwoNodes = {
	args: {
		keyProperty: 'id',
		keyValue: 'f7a21733-0e65-4985-9e40-a4fb00f3124f',
		showMaxNodes: 2,
	},
	parameters: {
		docs: {
			description: {
				story: 'Displaying node: Company Ktwoktqtxv and showing only two nodes',
			},
		},
	},
};

export const AlternateSeparator = {
	args: {
		keyProperty: 'id',
		keyValue: 'fc78989a-d213-496c-80db-a4fb00f31252',
		pathSeparator: '##',
	},
	parameters: {
		docs: {
			description: {
				story: 'Alternate separator',
			},
		},
	},
};

export const KtwoktqtxvWithNoWrap = {
	args: {
		keyProperty: 'id',
		keyValue: 'f7a21733-0e65-4985-9e40-a4fb00f3124f',
		noWrap: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Displaying node: Company Ktwoktqtxv with no-wrap',
			},
		},
	},
};

/*
	Figure it out how to add this version too

	<div>
		<h2>Alternate template</h2>
		<cosmoz-treenode id="alternateTemplate" key-property="id" key-value="fc78989a-d213-496c-80db-a4fb00f31252">

			<template>
				<span style="color: red;" class="separator separator[[index]]">\$\$</span> <a href="#id=[[node.id]]">[[node.name]]</a>
			</template>
		</cosmoz-treenode>
	</div>
*/
