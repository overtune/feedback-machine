module.exports = function(plop) {
	plop.setGenerator('Generate source file', {
		description: 'Generates js template file based on input',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'Which type of file would you like to create?',
				choices: [
					'Component',
					'Page',
					'Hook',
				],
			},
			{
				type: 'input',
				name: 'name',
				message: "What's the name of your item?",
			},
		],
		actions: data => {
			let actions = [];

			if (
				data.type === 'Component' ||
				data.type === 'Page'
			) {
				const folder = data.type === 'Page' ? 'src/pages' : 'src/components';

				actions.push({
					type: 'add',
					path: `${folder}/{{properCase name}}/{{properCase name}}.tsx`,
					templateFile: 'plop-templates/functional-component.hbs',
				});
				actions.push({
					type: 'add',
					path: `${folder}/{{properCase name}}/{{properCase name}}.test.tsx`,
					templateFile: 'plop-templates/test.hbs',
				});
				actions.push({
					type: 'add',
					path: `${folder}/{{properCase name}}/index.ts`,
					templateFile: 'plop-templates/index.hbs',
				});

				if (data.type === 'Component') {
					actions.push({
						type: 'add',
						path: `${folder}/{{properCase name}}/{{properCase name}}.stories.tsx`,
						templateFile: 'plop-templates/stories.hbs',
					});
					actions.push(
						'--> Your new functional component was created!'
					);
				} else if (data.type === 'Page') {
					actions.push({
						type: 'append',
						path: 'src/pages/index.tsx',
						pattern: `/* PLOP_INJECT_IMPORT */`,
						template: `import {{properCase name}} from './{{properCase name}}';`,
					});
					actions.push({
						type: 'append',
						path: 'src/pages/index.tsx',
						pattern: `/* PLOP_INJECT_PAGE */`,
						template: `\t{{properCase name}},`,
					});
					actions.push(
						'--> Your new page was created and added to the page-index!'
					);
				}
			} else if (data.type === 'Hook') {
				actions.push({
					type: 'add',
					path: 'src/hooks/{{camelCase name}}.ts',
					templateFile: 'plop-templates/hook.hbs',
				});
				actions.push({
					type: 'append',
					path: 'src/hooks/index.ts',
					pattern: `/* PLOP_INJECT_IMPORT */`,
					template: `import { {{camelCase name}} } from './{{camelCase name}}';`,
				});
				actions.push({
					type: 'append',
					path: 'src/hooks/index.ts',
					pattern: `/* PLOP_INJECT_EXPORT */`,
					template: `\t{{camelCase name}},`,
				});
				actions.push(
					'--> Your new hook was created and added to the hooks-index!'
				);
			}

			return actions;
		},
	});
};
