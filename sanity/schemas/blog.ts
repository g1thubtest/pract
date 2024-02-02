export default {
  name: 'blog',
  type: 'document',
  title: 'Блог',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название статьи',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Ссылка на статью',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Изображение',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Подзаголовок',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Содержание',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
