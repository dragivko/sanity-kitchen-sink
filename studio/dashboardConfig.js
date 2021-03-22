export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6058069b478fc60cc4d36a85',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6k4366w8',
                  apiId: '3b8526bd-f0e5-4f39-905e-e1b97ae790f9'
                },
                {
                  buildHookId: '6058069bbae5270a219b4b5a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eiz1nbpi',
                  apiId: 'bb574e80-91d0-4151-806b-e7dc318a4406'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dragivko/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eiz1nbpi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
